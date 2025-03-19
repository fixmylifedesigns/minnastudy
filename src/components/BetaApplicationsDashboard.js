"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Download,
  Filter,
  RefreshCw,
} from "lucide-react";

export default function BetaApplicationsDashboard() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOptions, setFilterOptions] = useState({
    deviceType: "",
    frequency: "",
    willPay: "",
  });
  const [sortConfig, setSortConfig] = useState({
    key: "createdTime",
    direction: "desc",
  });

  const itemsPerPage = 10;

  // Field mapping to display human-readable names
  const fieldMapping = {
    name: "Full Name",
    email: "Email Address",
    country: "Country",
    age: "Age",
    primaryLanguage: "Primary Language",
    otherLanguages: "Other Languages",
    devices: "Testing Devices",
    translationFrequency: "Translation Frequency",
    usage: "Translation Usage",
    currentTools: "Current Tools",
    problems: "Problems with Current Tools",
    useProfessionally: "Would Use Professionally",
    preferredFeatures: "Preferred Features",
    languagesWanted: "Languages Wanted",
    pay: "Would Pay",
    price: "Price Willing to Pay",
    adsOrPaid: "Ads or Paid Preference",
    payForDialect: "Pay for Dialect",
    feedback: "Will Provide Feedback",
    testingFrequency: "Testing Frequency",
    contactPermission: "Can Contact",
    comments: "Additional Comments",
    referral: "Referral Source",
    createdTime: "Submission Date",
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/beta-testers");

      if (!response.ok) {
        throw new Error("Failed to fetch applications");
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Failed to load applications");
      }

      // Format the data from Airtable response
      const formattedData = result.data.map((record) => {
        // Convert Airtable field names to our internal field names
        const formattedRecord = {};

        // Map the values from Airtable fields to our internal field names
        // This is a simplified example - you'll need to adjust based on your actual Airtable field names
        Object.entries(record.fields).forEach(([key, value]) => {
          // Convert from FIELDS mapping to our internal field names
          const internalKey =
            Object.entries(FIELDS)
              .find(([_, val]) => val === key)?.[0]
              ?.toLowerCase() || key;
          formattedRecord[internalKey] = value;
        });

        // Add created time and record ID
        formattedRecord.id = record.id;
        formattedRecord.createdTime = record.createdTime;

        return formattedRecord;
      });

      setApplications(formattedData);
      setLoading(false);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message || "Failed to load applications");
      setLoading(false);
    }
  };

  // Export to CSV
  const exportToCSV = () => {
    if (applications.length === 0) return;

    // Get all unique fields from all applications
    const allFields = new Set();
    applications.forEach((app) => {
      Object.keys(app).forEach((key) => allFields.add(key));
    });

    // Convert Set to Array and ensure important fields come first
    const orderedFields = [
      "name",
      "email",
      "primaryLanguage",
      "pay",
      "testingFrequency",
      "createdTime",
      ...Array.from(allFields).filter(
        (field) =>
          ![
            "name",
            "email",
            "primaryLanguage",
            "pay",
            "testingFrequency",
            "createdTime",
          ].includes(field)
      ),
    ];

    // Create CSV header row with human-readable field names
    const header = orderedFields
      .map((field) => fieldMapping[field] || field)
      .join(",");

    // Create CSV rows
    const rows = applications.map((app) => {
      return orderedFields
        .map((field) => {
          const value = app[field];

          // Handle different value types
          if (value === undefined || value === null) return "";
          if (Array.isArray(value)) return `"${value.join(", ")}"`;
          if (typeof value === "string" && value.includes(","))
            return `"${value}"`;
          return value;
        })
        .join(",");
    });

    // Combine header and rows
    const csv = [header, ...rows].join("\n");

    // Create download link
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute(
      "download",
      `beta-applications-${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Sort functionality
  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Apply sorting, filtering and search
  const getProcessedApplications = () => {
    // First apply search
    const searchFiltered = applications.filter((app) => {
      if (!searchTerm) return true;
      const searchTermLower = searchTerm.toLowerCase();

      // Search in name, email, languages, and comments
      return (
        (app.name && app.name.toLowerCase().includes(searchTermLower)) ||
        (app.email && app.email.toLowerCase().includes(searchTermLower)) ||
        (app.primaryLanguage &&
          app.primaryLanguage.toLowerCase().includes(searchTermLower)) ||
        (app.comments && app.comments.toLowerCase().includes(searchTermLower))
      );
    });

    // Then apply filters
    const filtered = searchFiltered.filter((app) => {
      // Filter by device type
      if (filterOptions.deviceType && app.devices) {
        if (!Array.isArray(app.devices)) {
          app.devices = [app.devices];
        }
        if (!app.devices.includes(filterOptions.deviceType)) return false;
      }

      // Filter by frequency
      if (
        filterOptions.frequency &&
        app.translationFrequency !== filterOptions.frequency
      )
        return false;

      // Filter by willingness to pay
      if (filterOptions.willPay && app.pay !== filterOptions.willPay)
        return false;

      return true;
    });

    // Finally apply sorting
    const sorted = [...filtered].sort((a, b) => {
      if (a[sortConfig.key] === undefined) return 1;
      if (b[sortConfig.key] === undefined) return -1;

      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];

      // Handle different value types
      if (Array.isArray(aValue)) aValue = aValue.join(", ");
      if (Array.isArray(bValue)) bValue = bValue.join(", ");

      if (aValue < bValue) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    return sorted;
  };

  const processedApplications = getProcessedApplications();

  // Get current page items
  const currentItems = processedApplications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(processedApplications.length / itemsPerPage);

  // Format date from ISO string
  const formatDate = (isoString) => {
    if (!isoString) return "";
    return new Date(isoString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setFilterOptions({
      deviceType: "",
      frequency: "",
      willPay: "",
    });
    setSortConfig({
      key: "createdTime",
      direction: "desc",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800">{error}</p>
            <button
              onClick={fetchApplications}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Beta Tester Applications
          </h1>
          <p className="text-gray-600 mt-2">
            Showing {processedApplications.length} applications
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search applications..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={fetchApplications}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </button>

              <button
                onClick={exportToCSV}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Device Type
              </label>
              <select
                value={filterOptions.deviceType}
                onChange={(e) =>
                  setFilterOptions({
                    ...filterOptions,
                    deviceType: e.target.value,
                  })
                }
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">All Devices</option>
                <option value="Android">Android</option>
                <option value="iPhone">iPhone</option>
                <option value="Tablet">Tablet</option>
                <option value="Desktop">Desktop</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Translation Frequency
              </label>
              <select
                value={filterOptions.frequency}
                onChange={(e) =>
                  setFilterOptions({
                    ...filterOptions,
                    frequency: e.target.value,
                  })
                }
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">All Frequencies</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Occasionally">Occasionally</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Willing to Pay
              </label>
              <select
                value={filterOptions.willPay}
                onChange={(e) =>
                  setFilterOptions({
                    ...filterOptions,
                    willPay: e.target.value,
                  })
                }
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">All</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={resetFilters}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
              >
                <Filter className="h-4 w-4 mr-2" />
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Applications Table */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {processedApplications.length > 0 ? (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <span className="sr-only">Expand</span>
                      </th>
                      <th
                        onClick={() => requestSort("createdTime")}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      >
                        <div className="flex items-center">
                          Date
                          {sortConfig.key === "createdTime" &&
                            (sortConfig.direction === "asc" ? (
                              <ChevronUp className="h-4 w-4 ml-1" />
                            ) : (
                              <ChevronDown className="h-4 w-4 ml-1" />
                            ))}
                        </div>
                      </th>
                      <th
                        onClick={() => requestSort("name")}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      >
                        <div className="flex items-center">
                          Name
                          {sortConfig.key === "name" &&
                            (sortConfig.direction === "asc" ? (
                              <ChevronUp className="h-4 w-4 ml-1" />
                            ) : (
                              <ChevronDown className="h-4 w-4 ml-1" />
                            ))}
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Primary Language
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Devices
                      </th>
                      <th
                        onClick={() => requestSort("pay")}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      >
                        <div className="flex items-center">
                          Would Pay
                          {sortConfig.key === "pay" &&
                            (sortConfig.direction === "asc" ? (
                              <ChevronUp className="h-4 w-4 ml-1" />
                            ) : (
                              <ChevronDown className="h-4 w-4 ml-1" />
                            ))}
                        </div>
                      </th>
                      <th
                        onClick={() => requestSort("testingFrequency")}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      >
                        <div className="flex items-center">
                          Testing Frequency
                          {sortConfig.key === "testingFrequency" &&
                            (sortConfig.direction === "asc" ? (
                              <ChevronUp className="h-4 w-4 ml-1" />
                            ) : (
                              <ChevronDown className="h-4 w-4 ml-1" />
                            ))}
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentItems.map((application, index) => (
                      <React.Fragment key={application.id || index}>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button
                              onClick={() =>
                                setExpandedRow(
                                  expandedRow === index ? null : index
                                )
                              }
                              className="text-gray-500 hover:text-indigo-600"
                            >
                              {expandedRow === index ? (
                                <ChevronUp size={20} />
                              ) : (
                                <ChevronDown size={20} />
                              )}
                            </button>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatDate(application.createdTime)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {application.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {application.email}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {application.primaryLanguage}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {Array.isArray(application.devices)
                              ? application.devices.join(", ")
                              : application.devices}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                ${
                                  application.pay === "Yes"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-gray-100 text-gray-800"
                                }`}
                            >
                              {application.pay || "Unknown"}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {application.testingFrequency}
                          </td>
                        </tr>
                        {expandedRow === index && (
                          <tr>
                            <td colSpan="7" className="px-6 py-4 bg-gray-50">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h3 className="font-semibold mb-2">
                                    Personal Information
                                  </h3>
                                  <p>
                                    <span className="text-gray-600">
                                      Country:
                                    </span>{" "}
                                    {application.country}
                                  </p>
                                  <p>
                                    <span className="text-gray-600">Age:</span>{" "}
                                    {application.age}
                                  </p>
                                  <p>
                                    <span className="text-gray-600">
                                      Other Languages:
                                    </span>{" "}
                                    {Array.isArray(application.otherLanguages)
                                      ? application.otherLanguages.join(", ")
                                      : application.otherLanguages}
                                  </p>
                                </div>

                                <div>
                                  <h3 className="font-semibold mb-2">
                                    Translation Usage
                                  </h3>
                                  <p>
                                    <span className="text-gray-600">
                                      Frequency:
                                    </span>{" "}
                                    {application.translationFrequency}
                                  </p>
                                  <p>
                                    <span className="text-gray-600">
                                      Usage:
                                    </span>{" "}
                                    {Array.isArray(application.usage)
                                      ? application.usage.join(", ")
                                      : application.usage}
                                  </p>
                                  <p>
                                    <span className="text-gray-600">
                                      Current Tools:
                                    </span>{" "}
                                    {Array.isArray(application.currentTools)
                                      ? application.currentTools.join(", ")
                                      : application.currentTools}
                                  </p>
                                </div>

                                <div>
                                  <h3 className="font-semibold mb-2">
                                    Feature Preferences
                                  </h3>
                                  <p>
                                    <span className="text-gray-600">
                                      Preferred Features:
                                    </span>{" "}
                                    {Array.isArray(
                                      application.preferredFeatures
                                    )
                                      ? application.preferredFeatures.join(", ")
                                      : application.preferredFeatures}
                                  </p>
                                  <p>
                                    <span className="text-gray-600">
                                      Languages Wanted:
                                    </span>{" "}
                                    {application.languagesWanted}
                                  </p>
                                </div>

                                <div>
                                  <h3 className="font-semibold mb-2">
                                    Payment Preferences
                                  </h3>
                                  <p>
                                    <span className="text-gray-600">
                                      Would Pay:
                                    </span>{" "}
                                    {application.pay}
                                  </p>
                                  <p>
                                    <span className="text-gray-600">
                                      Price Willing to Pay:
                                    </span>{" "}
                                    ${application.price}
                                  </p>
                                  <p>
                                    <span className="text-gray-600">
                                      Ads or Paid:
                                    </span>{" "}
                                    {application.adsOrPaid}
                                  </p>
                                  <p>
                                    <span className="text-gray-600">
                                      Pay for Dialect:
                                    </span>{" "}
                                    {application.payForDialect}
                                  </p>
                                </div>

                                <div className="col-span-2">
                                  <h3 className="font-semibold mb-2">
                                    Problems & Comments
                                  </h3>
                                  <p>
                                    <span className="text-gray-600">
                                      Problems with Current Tools:
                                    </span>{" "}
                                    {application.problems}
                                  </p>
                                  <p>
                                    <span className="text-gray-600">
                                      Additional Comments:
                                    </span>{" "}
                                    {application.comments}
                                  </p>
                                  <p>
                                    <span className="text-gray-600">
                                      Referral Source:
                                    </span>{" "}
                                    {application.referral}
                                  </p>
                                </div>

                                <div>
                                  <h3 className="font-semibold mb-2">
                                    Testing Commitment
                                  </h3>
                                  <p>
                                    <span className="text-gray-600">
                                      Will Provide Feedback:
                                    </span>{" "}
                                    {application.feedback}
                                  </p>
                                  <p>
                                    <span className="text-gray-600">
                                      Testing Frequency:
                                    </span>{" "}
                                    {application.testingFrequency}
                                  </p>
                                  <p>
                                    <span className="text-gray-600">
                                      Can Contact:
                                    </span>{" "}
                                    {application.contactPermission}
                                  </p>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="flex items-center justify-between w-full">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                  >
                    Previous
                  </button>

                  <div>
                    <p className="text-sm text-gray-700">
                      Showing{" "}
                      <span className="font-medium">
                        {processedApplications.length > 0
                          ? (currentPage - 1) * itemsPerPage + 1
                          : 0}
                      </span>{" "}
                      to{" "}
                      <span className="font-medium">
                        {Math.min(
                          currentPage * itemsPerPage,
                          processedApplications.length
                        )}
                      </span>{" "}
                      of{" "}
                      <span className="font-medium">
                        {processedApplications.length}
                      </span>{" "}
                      applications
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages || totalPages === 0}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="p-8 text-center">
              <p className="text-gray-500">
                No applications found. Adjust your search criteria or try
                refreshing.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// FIELDS mapping from API - this should match the API's definition
const FIELDS = {
  NAME: "Full Name",
  EMAIL: "Email Address",
  COUNTRY: "Country",
  AGE: "Age",
  PRIMARY_LANGUAGE: "Primary Language",
  OTHER_LANGUAGES: "Other Languages You Speak",
  DEVICES: "Device(s) for Testing",
  TRANSLATION_FREQUENCY: "How often do you need translations?",
  USAGE: "What do you use translations for?",
  CURRENT_TOOLS: "Current Translation Tools Used",
  PROBLEMS: "What's the biggest problem with current tools?",
  USE_PROFESSIONALLY: "Would you use AI-generated translations professionally?",
  PREFERRED_FEATURES: "Preferred Features",
  LANGUAGES_WANTED: "Languages/Dialects You Want Supported",
  PAY: "Would you pay for this?",
  PRICE: "How much would you pay?",
  ADS_OR_PAID: "Free with ads or Paid?",
  PAY_FOR_DIALECT: "Would you pay extra for dialect translations?",
  FEEDBACK: "Are you willing to provide feedback?",
  TESTING_FREQUENCY: "How often can you test the app?",
  CONTACT_PERMISSION: "Can we contact you for feedback?",
  COMMENTS: "Additional Comments",
  REFERRAL: "How did you hear about us?",
};
