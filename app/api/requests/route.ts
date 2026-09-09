import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

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
      message
    } = body;

    if (
      !restaurant_name ||
      !contact_name ||
      !phone ||
      !service_type
    ) {
      return NextResponse.json(
        {
          error: "Required information is missing."
        },
        {
          status: 400
        }
      );
    }

    const { error } = await supabase
      .from("restaurant_requests")
      .insert({
        restaurant_name,
        contact_name,
        phone,
        email,
        restaurant_address,
        service_type,
        staff_positions,
        number_of_workers:
          number_of_workers
            ? Number(number_of_workers)
            : null,
        preferred_date:
          preferred_date || null,
        preferred_time,
        frequency,
        message,
        status:"new"
      });

    if (error) {

      console.error(error);

      return NextResponse.json(
        {
          error: "Could not save request."
        },
        {
          status: 500
        }
      );
    }

    return NextResponse.json({
      success: true
    });

  } catch {

    return NextResponse.json(
      {
        error: "Invalid request."
      },
      {
        status: 400
      }
    );

  }

}