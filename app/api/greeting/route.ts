import { FormValues } from "@/app/greeting/page";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } =
      (await request.json()) as unknown as FormValues;

    if (!message || !email)
      return NextResponse.json({ error: "Missing form data" }, { status: 400 });

    const transporter = nodemailer.createTransport({
      host: "smtp.protonmail.ch",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_CLIENT_ADDRESS,
        pass: process.env.EMAIL_CLIENT,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const info = await transporter.sendMail({
      from: `"Jesse" <${process.env.EMAIL_CLIENT_ADDRESS}>`,
      to: email,
      bcc: process.env.EMAIL_CLIENT_ADDRESS,
      subject: "Tech Demo",
      html: `
    <h1>Thank you for your thoughts!</h1>
    <p>Dear Friend,</p>
    <p>I have received your message and will answer any questions as soon as I can.</p>
    <p>Your sent:</p>
    <code>name: ${name ? name : ""}</code>
    <br />
    <code>phone: ${phone ? phone : ""}</code>
    <br /><br />
    <blockquote>${message}</blockquote>
    <br /><br />
    <p>Best regards,<br/>Fizzog a.k.a Jesse</p>
`,
    });

    console.log("Message sent: %s", info.messageId);
    return NextResponse.json(
      { message: "Received" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  }
}
