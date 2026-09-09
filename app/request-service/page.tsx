"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RequestService() {

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
    message: ""
  });

  function updateField(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  function toggleStaff(position: string) {

    setForm((current) => {

      const exists =
        current.staff_positions.includes(position);

      return {
        ...current,
        staff_positions: exists
          ? current.staff_positions.filter(
              (item) => item !== position
            )
          : [...current.staff_positions, position]
      };

    });

  }

  async function submitForm(
    event: React.FormEvent
  ) {

    event.preventDefault();

    setLoading(true);

    const response = await fetch("/api/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    setLoading(false);

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please call us directly.");
    }
  }

  if (submitted) {

    return (
      <>
        <Navbar />

        <main className="flex min-h-[70vh] items-center justify-center px-6">

          <div className="max-w-xl text-center">

            <div className="text-6xl">✓</div>

            <h1 className="mt-6 text-4xl font-bold text-[#062B52]">
              Request Received!
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Thank you for contacting Royal Commercial Kitchen
              Cleaning and Staffing Group LLC.
            </p>

            <p className="mt-4">
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

      <main className="bg-gray-50 px-6 py-16">

        <div className="mx-auto max-w-4xl">

          <div className="mb-12 text-center">

            <p className="font-bold uppercase tracking-widest text-[#E5A91A]">
              Restaurant Services
            </p>

            <h1 className="mt-2 text-4xl font-bold text-[#062B52]">
              Request Cleaning or Staffing
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Tell us what your restaurant needs and our team
              will contact you.
            </p>

          </div>


          <form
            onSubmit={submitForm}
            className="space-y-8 rounded-3xl bg-white p-8 shadow-xl"
          >

            <div>

              <h2 className="mb-6 text-2xl font-bold text-[#062B52]">
                Restaurant Information
              </h2>

              <div className="grid gap-5 md:grid-cols-2">

                <input
                  name="restaurant_name"
                  placeholder="Restaurant Name *"
                  required
                  value={form.restaurant_name}
                  onChange={updateField}
                  className="rounded-xl border p-4"
                />

                <input
                  name="contact_name"
                  placeholder="Contact Person *"
                  required
                  value={form.contact_name}
                  onChange={updateField}
                  className="rounded-xl border p-4"
                />

                <input
                  name="phone"
                  placeholder="Phone Number *"
                  required
                  value={form.phone}
                  onChange={updateField}
                  className="rounded-xl border p-4"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={updateField}
                  className="rounded-xl border p-4"
                />

              </div>

              <input
                name="restaurant_address"
                placeholder="Restaurant Address"
                value={form.restaurant_address}
                onChange={updateField}
                className="mt-5 w-full rounded-xl border p-4"
              />

            </div>


            <div>

              <h2 className="mb-6 text-2xl font-bold text-[#062B52]">
                What Do You Need?
              </h2>

              <select
                name="service_type"
                required
                value={form.service_type}
                onChange={updateField}
                className="w-full rounded-xl border p-4"
              >

                <option value="">
                  Select a service
                </option>

                <option>
                  Commercial Kitchen Cleaning
                </option>

                <option>
                  Restaurant Cleaning
                </option>

                <option>
                  Scheduled Maintenance
                </option>

                <option>
                  Staffing Services
                </option>

                <option>
                  Cleaning + Staffing
                </option>

              </select>

            </div>


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
                  "Managers"
                ].map((position) => (

                  <button
                    type="button"
                    key={position}
                    onClick={() => toggleStaff(position)}
                    className={`rounded-xl border p-4 text-left ${
                      form.staff_positions.includes(position)
                        ? "border-[#E5A91A] bg-[#E5A91A]/20"
                        : "border-gray-200"
                    }`}
                  >

                    {form.staff_positions.includes(position)
                      ? "✓ "
                      : ""}
                    {position}

                  </button>

                ))}

              </div>

            </div>


            <div className="grid gap-5 md:grid-cols-3">

              <input
                name="number_of_workers"
                type="number"
                min="1"
                placeholder="Number of Workers"
                value={form.number_of_workers}
                onChange={updateField}
                className="rounded-xl border p-4"
              />

              <input
                name="preferred_date"
                type="date"
                value={form.preferred_date}
                onChange={updateField}
                className="rounded-xl border p-4"
              />

              <input
                name="preferred_time"
                placeholder="Preferred Time"
                value={form.preferred_time}
                onChange={updateField}
                className="rounded-xl border p-4"
              />

            </div>


            <select
              name="frequency"
              value={form.frequency}
              onChange={updateField}
              className="w-full rounded-xl border p-4"
            >

              <option value="">
                Service Frequency
              </option>

              <option>One Time</option>
              <option>Weekly</option>
              <option>Bi-Weekly</option>
              <option>Monthly</option>
              <option>Ongoing</option>

            </select>


            <textarea
              name="message"
              placeholder="Tell us more about what your restaurant needs..."
              value={form.message}
              onChange={updateField}
              rows={6}
              className="w-full rounded-xl border p-4"
            />


            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#062B52] px-8 py-5 text-lg font-bold text-white hover:bg-[#0b3b6d]"
            >

              {loading
                ? "Submitting..."
                : "Submit Service Request"}

            </button>

          </form>

        </div>

      </main>

      <Footer />
    </>
  );
}