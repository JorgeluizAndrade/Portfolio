"use server";

import { getErrorMessage, validateSring } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-from-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateSring(message, 500)) {
    return {
      error: "Mensagem inválida",
    };
  }

  if (!validateSring(senderEmail, 500)) {
    return {
      error: "Email inválida",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "jojoluiz42@gmail.com",
      subject: "Mensagem de jorge luiz.",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
