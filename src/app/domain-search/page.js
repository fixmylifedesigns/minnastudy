// src/app/domain-search/page.js
"use client";
import { useState } from "react";
import { Check, X, Loader2 } from "lucide-react";

const TLD_LIST = [
  ".com",
  ".net",
  ".org",
  ".io",
  ".co",
  ".me",
  ".app",
  ".dev",
  ".ai",
  ".study",
];

export default function DomainSearch() {
  const [inputDomain, setInputDomain] = useState("");
  const [searchedDomain, setSearchedDomain] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!inputDomain) return;
    setSearchedDomain(inputDomain);

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const response = await fetch("/api/whois", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ domainName: inputDomain }),
      });

      if (!response.ok) {
        throw new Error("Failed to check domain availability");
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <header className="w-full py-16 bg-gradient-to-r from-indigo-500 to-primary-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Domain Search</h1>
          <p className="text-xl sm:text-2xl mb-8">
            Find your perfect domain name
          </p>
        </div>
      </header>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Search Form */}
          <div className="bg-white rounded-lg shadow-md p-8 m-8">
            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <label
                  htmlFor="domainName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Enter Your Desired Domain Name
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    id="domainName"
                    value={inputDomain}
                    onChange={(e) => setInputDomain(e.target.value)}
                    placeholder="examplename"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    {loading ? "Searching..." : "Search"}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <Loader2 className="w-8 h-8 animate-spin mx-auto text-blue-600 mb-4" />
              <p className="text-gray-600">Checking domain availability...</p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {/* Results */}
          {results && (
            <div className="space-y-6">
              {/* Available Domains */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Available Domains
                </h2>
                <div className="space-y-4">
                  {results.available.map((domain) => (
                    <div
                      key={domain}
                      className="flex items-center justify-between p-4 border border-green-200 rounded-lg bg-green-50"
                    >
                      <div className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="text-lg font-medium">
                          {searchedDomain}
                          {domain}
                        </span>
                      </div>
                      <span className="text-green-600 font-medium">
                        Available!
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Taken Domains */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Taken Domains
                </h2>
                <div className="space-y-4">
                  {results.taken.map((domain) => (
                    <div
                      key={domain.tld}
                      className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50"
                    >
                      <div className="flex items-center space-x-3">
                        <X className="w-5 h-5 text-red-600" />
                        <span className="text-lg font-medium">
                          {searchedDomain}
                          {domain.tld}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="text-red-600 font-medium">Taken</p>
                        <p className="text-sm text-gray-600">
                          Registrar: {domain.registrar || "Unknown"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
