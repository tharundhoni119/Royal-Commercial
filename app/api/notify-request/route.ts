import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      restaurant_name,
      contact_name,
      phone,
      email,
      restaurant_address,
      service_type,
      staff_positions,
      number_of_workers,
      preferred_date,
      preferred_time,
      frequency,
      message,
    } = body;

    const { data, error } = await resend.emails.send({
      from: "Royal Website <onboarding@resend.dev>",

      to: [process.env.ADMIN_NOTIFICATION_EMAIL!],

      subject: `New Royal Service Request - ${
        restaurant_name || "Customer"
      }`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 650px;
          margin: auto;
          border: 1px solid #dddddd;
          background: #ffffff;
        ">

          <div style="
            background: #082f5b;
            padding: 25px;
            text-align: center;
          ">
            <h1 style="
              color: #d7a725;
              margin: 0;
              font-size: 30px;
            ">
              ROYAL
            </h1>

            <p style="
              color: white;
              margin: 7px 0 0;
            ">
              New Service Request
            </p>
          </div>

          <div style="padding: 30px;">

            <h2 style="color: #082f5b;">
              New Customer Request
            </h2>

            <p>
              <strong>Restaurant:</strong><br>
              ${escapeHtml(restaurant_name || "Not provided")}
            </p>

            <p>
              <strong>Contact Name:</strong><br>
              ${escapeHtml(contact_name || "Not provided")}
            </p>

            <p>
              <strong>Phone:</strong><br>
              ${escapeHtml(phone || "Not provided")}
            </p>

            <p>
              <strong>Email:</strong><br>
              ${escapeHtml(email || "Not provided")}
            </p>

            <p>
              <strong>Address:</strong><br>
              ${escapeHtml(
                restaurant_address || "Not provided"
              )}
            </p>

            <p>
              <strong>Service Type:</strong><br>
              ${escapeHtml(service_type || "Not provided")}
            </p>

            <p>
              <strong>Staff Positions:</strong><br>
              ${
                Array.isArray(staff_positions) &&
                staff_positions.length > 0
                  ? escapeHtml(staff_positions.join(", "))
                  : "Not applicable"
              }
            </p>

            <p>
              <strong>Number of Workers:</strong><br>
              ${escapeHtml(
                String(number_of_workers || "Not specified")
              )}
            </p>

            <p>
              <strong>Preferred Date:</strong><br>
              ${escapeHtml(
                preferred_date || "Not specified"
              )}
            </p>

            <p>
              <strong>Preferred Time:</strong><br>
              ${escapeHtml(
                preferred_time || "Not specified"
              )}
            </p>

            <p>
              <strong>Frequency:</strong><br>
              ${escapeHtml(frequency || "Not specified")}
            </p>

            <p>
              <strong>Message:</strong><br>
              ${escapeHtml(message || "No message")}
            </p>

          </div>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });

  } catch (error) {
    console.error("Email error:", error);

    return NextResponse.json(
      {
        error: "Unable to send email notification",
      },
      {
        status: 500,
      }
    );
  }
}