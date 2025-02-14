// src/app/api/whois/route.js
import { NextResponse } from "next/server";
import whois from "whois-json";

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

async function checkDomain(domain) {
  try {
    const results = await whois(domain);
    // If we get a "No match" or similar message in the raw text,
    // or if there's no registration data, the domain is likely available
    const isAvailable =
      !results.domainName ||
      (results.rawText && results.rawText.toLowerCase().includes("no match")) ||
      !results.registrar;

    return {
      isAvailable,
      registrar: results.registrar,
    };
  } catch (error) {
    console.error(`Error checking domain ${domain}:`, error);
    // If there's an error checking the domain, we'll assume it's available
    // This isn't perfect but it's better than failing the whole request
    return {
      isAvailable: true,
      registrar: null,
    };
  }
}

export async function POST(request) {
  try {
    const { domainName } = await request.json();

    // Basic domain name validation
    const nameRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]$/;
    if (!nameRegex.test(domainName)) {
      return NextResponse.json(
        { error: "Invalid domain name format" },
        { status: 400 }
      );
    }

    // Check all TLDs in parallel
    const checkPromises = TLD_LIST.map(async (tld) => {
      const fullDomain = `${domainName}${tld}`;
      const result = await checkDomain(fullDomain);
      return {
        tld,
        ...result,
      };
    });

    const results = await Promise.all(checkPromises);

    // Separate available and taken domains
    const available = results
      .filter((result) => result.isAvailable)
      .map((result) => result.tld);

    const taken = results
      .filter((result) => !result.isAvailable)
      .map((result) => ({
        tld: result.tld,
        registrar: result.registrar,
      }));

    return NextResponse.json({
      available,
      taken,
    });
  } catch (error) {
    console.error("Domain check error:", error);
    return NextResponse.json(
      { error: "Failed to check domain availability" },
      { status: 500 }
    );
  }
}
