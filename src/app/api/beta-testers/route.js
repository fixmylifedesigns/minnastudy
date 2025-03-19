// api/beta-testers/route.js
import { NextResponse } from "next/server";

// Field mappings
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
  PROBLEMS: "What’s the biggest problem with current tools?",
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

export async function POST(req) {
  try {
    const data = await req.json();
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_BETA_NAME;

    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/${tableName}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                [FIELDS.NAME]: data.name,
                [FIELDS.EMAIL]: data.email,
                [FIELDS.COUNTRY]: data.country,
                [FIELDS.AGE]: data.age,
                [FIELDS.PRIMARY_LANGUAGE]: data.primaryLanguage,
                [FIELDS.OTHER_LANGUAGES]: data.otherLanguages,
                [FIELDS.DEVICES]: data.devices,
                [FIELDS.TRANSLATION_FREQUENCY]: data.translationFrequency,
                [FIELDS.USAGE]: data.usage,
                [FIELDS.CURRENT_TOOLS]: data.currentTools,
                [FIELDS.PROBLEMS]: data.problems,
                [FIELDS.USE_PROFESSIONALLY]: data.useProfessionally,
                [FIELDS.PREFERRED_FEATURES]: data.preferredFeatures,
                [FIELDS.LANGUAGES_WANTED]: data.languagesWanted,
                [FIELDS.PAY]: data.pay,
                [FIELDS.PRICE]: data.price,
                [FIELDS.ADS_OR_PAID]: data.adsOrPaid,
                [FIELDS.PAY_FOR_DIALECT]: data.payForDialect,
                [FIELDS.FEEDBACK]: data.feedback,
                [FIELDS.TESTING_FREQUENCY]: data.testingFrequency,
                [FIELDS.CONTACT_PERMISSION]: data.contactPermission,
                [FIELDS.COMMENTS]: data.comments,
                [FIELDS.REFERRAL]: data.referral,
              },
            },
          ],
          typecast: true,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Failed to create record");
    }

    const result = await response.json();
    return NextResponse.json({ success: true, record: result.records[0] });
  } catch (error) {
    console.error("Error adding beta tester:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_BETA_NAME;

    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/${tableName}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Failed to fetch testers");
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data: data.records });
  } catch (error) {
    console.error("Error fetching testers:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
