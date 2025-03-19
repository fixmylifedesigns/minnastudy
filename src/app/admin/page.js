"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  ChevronUp,
  Instagram,
  Youtube,
  Globe,
  Twitch,
} from "lucide-react";
import BetaApplicationsDashboard from "@/components/BetaApplicationsDashboard.js";

const TikTokIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Submissions() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // Check for admin password in localStorage
    const adminPassword = localStorage.getItem("admin");
    if (!adminPassword && adminPassword === "moeno") {
      router.push("/");
    } else {
      fetchSubmissions();
    }
  }, []);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyg3fDK1uot0DmxTyI6xAQrBGSVx7gu1LNF8CRLYvjjN75pzjq61Z_KFgQbAKgYkaxMxg/exec"
      );
      const data = await response.json();
      // Remove header row and reverse to show newest first
      const submissionsData = data.slice(1).reverse();
      setSubmissions(submissionsData);

      setLoading(false);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to load submissions");
      setLoading(false);
    }
  };

  const formatSocialMediaUrl = (type, username) => {
    if (!username) return null;
    username = username.trim().replace("@", "");

    switch (type) {
      case "instagram":
        return `https://instagram.com/${username}`;
      case "youtube":
        return username.includes("http")
          ? username
          : `https://youtube.com/@${username}`;
      case "twitch":
        return `https://twitch.tv/${username}`;
      case "tiktok":
        return `https://tiktok.com/@${username}`;
      default:
        return username;
    }
  };

  const SocialMediaLink = ({ type, username }) => {
    if (!username) return null;
    const url = formatSocialMediaUrl(type, username);
    if (!url) return null;

    const iconProps = {
      size: 20,
      className: "text-gray-600 hover:text-blue-600",
    };

    const icons = {
      instagram: <Instagram {...iconProps} />,
      youtube: <Youtube {...iconProps} />,
      website: <Globe {...iconProps} />,
      twitch: <Twitch {...iconProps} />,
      tiktok: <TikTokIcon {...iconProps} />,
    };

    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mx-1"
      >
        {icons[type]}
      </a>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800">{error}</p>
            <button
              onClick={fetchSubmissions}
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
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Website Applications
          </h1>
          <button
            onClick={fetchSubmissions}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Refresh
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Expand
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Teaching Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Links
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {submissions
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((row, index) => (
                  <React.Fragment key={index}>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() =>
                            setExpandedRow(expandedRow === index ? null : index)
                          }
                          className="text-gray-500 hover:text-blue-600"
                        >
                          {expandedRow === index ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(row[0]).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {row[1]}
                        </div>
                        <div className="text-sm text-gray-500">{row[2]}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {row[10]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          {row[5] && (
                            <SocialMediaLink type="website" username={row[5]} />
                          )}
                          {row[6] && (
                            <SocialMediaLink
                              type="instagram"
                              username={row[6]}
                            />
                          )}
                          {row[7] && (
                            <SocialMediaLink type="tiktok" username={row[7]} />
                          )}
                          {row[8] && (
                            <SocialMediaLink type="youtube" username={row[8]} />
                          )}
                          {row[9] && (
                            <SocialMediaLink type="twitch" username={row[9]} />
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={row[18] || "New"}
                          onChange={(e) => {
                            // Update status logic here
                            console.log("Status updated:", e.target.value);
                          }}
                          className="text-sm rounded-full px-3 py-1 border"
                        >
                          <option value="New">New</option>
                          <option value="Reviewed">Reviewed</option>
                        </select>
                      </td>
                    </tr>
                    {expandedRow === index && (
                      <tr>
                        <td colSpan="6" className="px-6 py-4 bg-gray-50">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h3 className="font-semibold mb-2">
                                Contact Information
                              </h3>
                              <p>
                                <span className="text-gray-600">Phone:</span>{" "}
                                {row[3]}
                              </p>
                              <p>
                                <span className="text-gray-600">Location:</span>{" "}
                                {row[4]}
                              </p>
                            </div>
                            <div>
                              <h3 className="font-semibold mb-2">
                                Teaching Profile
                              </h3>
                              <p>
                                <span className="text-gray-600">
                                  Experience:
                                </span>{" "}
                                {row[11]}
                              </p>
                              <p>
                                <span className="text-gray-600">Format:</span>{" "}
                                {row[12]}
                              </p>
                              <p>
                                <span className="text-gray-600">
                                  Age Groups:
                                </span>{" "}
                                {row[13]}
                              </p>
                              <p>
                                <span className="text-gray-600">
                                  Students/Month:
                                </span>{" "}
                                {row[14]}
                              </p>
                            </div>
                            <div className="col-span-2">
                              <h3 className="font-semibold mb-2">
                                Website Goals
                              </h3>
                              <p className="mb-2">
                                <span className="text-gray-600">Goals:</span>{" "}
                                {row[15]}
                              </p>
                              <p className="mb-2">
                                <span className="text-gray-600">
                                  Planned Use:
                                </span>{" "}
                                {row[16]}
                              </p>
                              <p>
                                <span className="text-gray-600">
                                  Desired Features:
                                </span>{" "}
                                {row[17]}
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
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex items-center justify-between w-full">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>

              <div>
                <p className="text-sm text-gray-700">
                  Showing{" "}
                  <span className="font-medium">
                    {(currentPage - 1) * itemsPerPage + 1}
                  </span>{" "}
                  to{" "}
                  <span className="font-medium">
                    {Math.min(currentPage * itemsPerPage, submissions.length)}
                  </span>{" "}
                  of <span className="font-medium">{submissions.length}</span>{" "}
                  results
                </p>
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(
                      prev + 1,
                      Math.ceil(submissions.length / itemsPerPage)
                    )
                  )
                }
                disabled={
                  currentPage === Math.ceil(submissions.length / itemsPerPage)
                }
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <BetaApplicationsDashboard />
      </div>
    </div>
  );
}
