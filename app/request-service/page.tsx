"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RequestService() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  /*
   * Shared form-field styling.
   * Explicit colors prevent mobile browsers / dark mode
   * from making the text or placeholders invisible.
   */
  const fieldStyle =
    "w-full rounded-xl border border-gray-300 bg-white p-4 text-base text-[#062B52] placeholder:text-gray-500 placeholder:opacity-100 focus:border-[#E5A91A] focus:outline-none focus:ring-2 focus:ring-[#E5A91A]/20 [color-scheme:light]";

  const [form, setForm] = useState({
    restaurant_name: "",
    contact_name: "",
    phone: "",
    email: "",
    restaurant_address: "",
    service_type: "",
    staff_positions: [] as string[],
    number_of_workers: "",
    preferred_date: "",
    preferred_time: "",
    frequency: "",
    message: "",
  });

  function updateField(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function toggleStaff(position: string) {
    setForm((current) => {
      const exists = current.staff_positions.includes(position);

      return {
        ...current,
        staff_positions: exists
          ? current.staff_positions.filter((item) => item !== position)
          : [...current.staff_positions, position],
      };
    });
  }

  async function submitForm(event: React.FormEvent) {
    event.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please call us directly.");
      }
    } catch (error) {
      console.error("Request submission error:", error);
      alert("Something went wrong. Please call us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="max-w-xl text-center">
            <div className="text-6xl text-[#E5A91A]">✓</div>

            <h1 className="mt-6 text-4xl font-bold text-[#062B52]">
              Request Received!
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Thank you for contacting Royal Commercial Kitchen Cleaning and
              Staffing Group LLC.
            </p>

            <p className="mt-4 text-[#062B52]">
              Our team will contact you to discuss your request.
            </p>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl">
          {/* Page Header */}
          <div className="mb-10 text-center sm:mb-12">
            <p className="font-bold uppercase tracking-widest text-[#E5A91A]">
              Restaurant Services
            </p>

            <h1 className="mt-2 text-3xl font-bold text-[#062B52] sm:text-4xl">
              Request Cleaning or Staffing
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Tell us what your restaurant needs and our team will contact you.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={submitForm}
            className="space-y-8 rounded-2xl bg-white p-5 shadow-xl sm:rounded-3xl sm:p-8"
          >
            {/* Restaurant Information */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-[#062B52]">
                Restaurant Information
              </h2>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  name="restaurant_name"
                  type="text"
                  placeholder="Restaurant Name *"
                  required
                  value={form.restaurant_name}
                  onChange={updateField}
                  className={fieldStyle}
                />

                <input
                  name="contact_name"
                  type="text"
                  placeholder="Contact Person *"
                  required
                  value={form.contact_name}
                  onChange={updateField}
                  className={fieldStyle}
                />

                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={form.phone}
                  onChange={updateField}
                  className={fieldStyle}
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={updateField}
                  className={fieldStyle}
                />
              </div>

              <input
                name="restaurant_address"
                type="text"
                placeholder="Restaurant Address"
                value={form.restaurant_address}
                onChange={updateField}
                className={`${fieldStyle} mt-5`}
              />
            </div>

            {/* Service Type */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-[#062B52]">
                What Do You Need?
              </h2>

              <select
                name="service_type"
                required
                value={form.service_type}
                onChange={updateField}
                className={fieldStyle}
              >
                <option value="">Select a service</option>

                <option value="Commercial Kitchen Cleaning">
                  Commercial Kitchen Cleaning
                </option>

                <option value="Deep Kitchen Cleaning">
                  Deep Kitchen Cleaning
                </option>

                <option value="Restaurant Cleaning">
                  Restaurant Cleaning
                </option>

                <option value="Scheduled Maintenance">
                  Scheduled Maintenance
                </option>

                <option value="Staffing Services">
                  Staffing Services
                </option>

                <option value="Cleaning + Staffing">
                  Cleaning + Staffing
                </option>
              </select>
            </div>

            {/* Staffing */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-[#062B52]">
                Staff Needed
              </h2>

              <div className="grid gap-3 md:grid-cols-2">
                {[
                  "Cooks",
                  "Servers",
                  "Dishwashers",
                  "Kitchen Assistants",
                  "Cleaning Personnel",
                  "Managers",
                ].map((position) => {
                  const selected =
                    form.staff_positions.includes(position);

                  return (
                    <button
                      type="button"
                      key={position}
                      onClick={() => toggleStaff(position)}
                      className={`rounded-xl border p-4 text-left text-base font-medium text-[#062B52] transition ${
                        selected
                          ? "border-[#E5A91A] bg-[#E5A91A]/20"
                          : "border-gray-200 bg-white hover:border-[#E5A91A]"
                      }`}
                    >
                      {selected ? "✓ " : ""}
                      {position}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Workers / Date / Time */}
            <div className="grid gap-5 md:grid-cols-3">
              <input
                name="number_of_workers"
                type="number"
                min="1"
                placeholder="Number of Workers"
                value={form.number_of_workers}
                onChange={updateField}
                className={fieldStyle}
              />

              <input
                name="preferred_date"
                type="date"
                value={form.preferred_date}
                onChange={updateField}
                className={fieldStyle}
              />

              <input
                name="preferred_time"
                type="text"
                placeholder="Preferred Time"
                value={form.preferred_time}
                onChange={updateField}
                className={fieldStyle}
              />
            </div>

            {/* Frequency */}
            <select
              name="frequency"
              value={form.frequency}
              onChange={updateField}
              className={fieldStyle}
            >
              <option value="">Service Frequency</option>
              <option value="One Time">One Time</option>
              <option value="Weekly">Weekly</option>
              <option value="Bi-Weekly">Bi-Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Ongoing">Ongoing</option>
            </select>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Tell us more about what your restaurant needs..."
              value={form.message}
              onChange={updateField}
              rows={6}
              className={`${fieldStyle} resize-y`}
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#062B52] px-8 py-5 text-lg font-bold text-white transition hover:bg-[#0b3b6d] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Service Request"}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}