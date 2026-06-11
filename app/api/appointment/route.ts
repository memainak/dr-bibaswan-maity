import {
  buildAppointmentWhatsAppUrl,
  parseAppointmentPayload,
} from "@/lib/appointment";
import {
  isFirebaseAdminConfigured,
  saveAppointmentRequest,
} from "@/lib/firebase-admin";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = parseAppointmentPayload(body);

    if (!parsed.ok) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }

    if (!isFirebaseAdminConfigured()) {
      return NextResponse.json(
        {
          error:
            "Appointment storage is not configured yet. Please add Firebase credentials on the server.",
        },
        { status: 503 }
      );
    }

    const id = await saveAppointmentRequest(parsed.data);
    const whatsappUrl = buildAppointmentWhatsAppUrl(
      parsed.data.name,
      parsed.data.phone
    );

    return NextResponse.json({
      success: true,
      id,
      whatsappUrl,
    });
  } catch (error) {
    console.error("Appointment API error:", error);
    return NextResponse.json(
      { error: "Could not save your request. Please try again or call the clinic." },
      { status: 500 }
    );
  }
}
