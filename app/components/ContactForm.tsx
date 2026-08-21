"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Icon } from "./Icon";

const intentLabels: Record<string, string> = {
  service: "Consultancy or systems support",
  training: "Training and capacity development",
  partnership: "Partnership opportunity",
  join: "Join the professional network",
  question: "General inquiry",
};

export function ContactForm({ initialIntent = "" }: { initialIntent?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const selectedIntent = intentLabels[initialIntent] ?? "";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-result form-result-success" role="status">
        <span><Icon name="check" /></span>
        <h2>Thank you for reaching out.</h2>
        <p>Your inquiry has been received. We will review it and respond with the most appropriate next step.</p>
        <button type="button" className="button button-secondary" onClick={() => setStatus("idle")}>Send another inquiry</button>
      </div>
    );
  }

  return (
    <form className="contact-form-new" action="https://formspree.io/f/maqrdodg" method="POST" onSubmit={submit}>
      <input type="hidden" name="_subject" value="New MEAL Bridge website inquiry" />
      <input className="form-honeypot" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="form-row-new">
        <label>Full name <span>*</span><input type="text" name="name" autoComplete="name" required placeholder="Your full name" /></label>
        <label>Email address <span>*</span><input type="email" name="email" autoComplete="email" required placeholder="you@example.com" /></label>
      </div>

      <div className="form-row-new">
        <label>Organization<input type="text" name="organization" autoComplete="organization" placeholder="Organization name" /></label>
        <label>Organization type
          <select name="organization_type" defaultValue="">
            <option value="" disabled>Select organization type</option>
            <option>NGO / INGO</option><option>UN agency</option><option>Government / public institution</option>
            <option>University / academic institution</option><option>Private sector</option><option>Individual professional</option><option>Other</option>
          </select>
        </label>
      </div>

      <label>What would you like to discuss? <span>*</span>
        <select name="interest" defaultValue={selectedIntent} required>
          <option value="" disabled>Select a starting point</option>
          <option>Consultancy or systems support</option><option>Training and capacity development</option>
          <option>Partnership opportunity</option><option>Join the professional network</option><option>General inquiry</option>
        </select>
      </label>

      <label>Tell us about the situation <span>*</span>
        <textarea name="message" rows={7} required placeholder="What are you working on, what is not working as expected, and what outcome do you need?" />
      </label>

      <div className="form-submit-row">
        <button className="button button-primary button-large" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send inquiry"} {status !== "sending" && <Icon name="arrow" />}
        </button>
        <p>By submitting, you agree that MEAL Bridge may use this information to respond to your inquiry.</p>
      </div>

      {status === "error" && (
        <p className="form-error" role="alert">The inquiry could not be sent. Please try again or email <a href="mailto:info@meal-bridge.com">info@meal-bridge.com</a>.</p>
      )}
    </form>
  );
}
