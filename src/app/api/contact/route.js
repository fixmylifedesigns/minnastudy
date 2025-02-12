// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, languages, domain, features, additionalInfo } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6B46C1; text-align: center; padding: 20px;">New Website Inquiry From Minnastudy.com</h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #4A5568; margin-bottom: 15px;">Teacher Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teaching Languages:</strong> ${languages}</p>
        </div>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #4A5568; margin-bottom: 15px;">Website Preferences</h3>
          <p><strong>Domain Preference:</strong> ${domain}</p>
          <p><strong>Requested Features:</strong></p>
          <ul style="margin: 0; padding-left: 20px;">
            ${features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
        </div>

        ${
          additionalInfo
            ? `
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <h3 style="color: #4A5568; margin-bottom: 15px;">Additional Information</h3>
            <p>${additionalInfo}</p>
          </div>
        `
            : ""
        }
      </div>
    `;

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Website Inquiry from ${name}`,
      html: htmlContent,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
