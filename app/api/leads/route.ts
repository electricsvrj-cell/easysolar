import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, houseNumber, streetName, suburb, state, postcode } = body;

    // Validate required fields
    if (!name || !email || !phone || !postcode) {
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

    // SMTP Configuration from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const adminEmail = process.env.ADMIN_EMAIL || "varunshrma1990@gmail.com";

    // 1. Admin Notification Email
    const adminMailOptions = {
      from: `"Easy Solar Leads" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      subject: `New Lead: ${name} - ${suburb}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #0b2a4d; border-bottom: 2px solid #0b2a4d; padding-bottom: 10px;">New Lead Captured</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Full Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Address</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${houseNumber} ${streetName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Suburb</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${suburb}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">State</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${state}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Postcode</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${postcode}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; color: #666; font-size: 12px;">This lead was generated from the Easy Solar website.</p>
        </div>
      `,
    };

    // 2. User Auto-Reply Email
    const userMailOptions = {
      from: `"Easy Solar Solution" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We've received your inquiry – Easy Solar Solution`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #0b2a4d;">Hi ${name},</h2>
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Thank you for reaching out to **Easy Solar Solution**! We've received your request for a free solar quote.
          </p>
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Our Victorian-based experts are currently reviewing your details for the property at **${suburb}**. We'll get back to you within 24 hours with a personalized solution.
          </p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold; color: #0b2a4d;">What's next?</p>
            <ul style="margin: 10px 0 0 0; padding-left: 20px; color: #555;">
              <li>System design analysis based on your roof space.</li>
              <li>Estimated savings calculation.</li>
              <li>Phone consultation to answer any questions.</li>
            </ul>
          </div>
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Talk soon,<br>
            <strong>The Easy Solar Team</strong>
          </p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #999; text-align: center;">
            Easy Solar Solution | Trusted Solar Experts in Victoria
          </p>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending lead:", error);
    return NextResponse.json(
      { error: "Failed to send lead" },
      { status: 500 }
    );
  }
}
