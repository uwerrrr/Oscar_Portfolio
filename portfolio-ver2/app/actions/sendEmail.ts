"use server";

import { Resend } from "resend";
import * as React from "react";
import EmailTemplate from "@/app/components/EmailTemplate";



const resend = new Resend(process.env.RESEND_API_KEY);
const emailToSend = "van.lenguyen@outlook.com";

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  const stringGuard = (value: unknown): value is string =>
    typeof value === "string";

  if (!senderEmail || !stringGuard(senderEmail)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!message || !stringGuard(message)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const { data } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [emailToSend],
      subject: "Message from portfolio contact form",
      react: EmailTemplate({
        senderEmail: senderEmail,
        message: message,
      }) as React.ReactElement,
    });

    console.log("email is sent: ", data);
    return { data };
  } catch (error) {
    console.error("Error sending email: ", error);
    return {
      error: error instanceof Error ? error.message : "Something went wrong",
    };
  }
}
