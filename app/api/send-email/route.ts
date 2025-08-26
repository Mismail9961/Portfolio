import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.ADMIN_EMAIL, // must match Gmail account
      to: process.env.ADMIN_EMAIL,
      replyTo: email, // user’s email to reply back
      subject: subject || "📩 New Contact Form Submission",
      text: `
You have a new message from your website contact form:

Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Error sending mail:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message." },
      { status: 500 }
    );
  }
}
