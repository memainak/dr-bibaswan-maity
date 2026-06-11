const INDIAN_MOBILE = /^[6-9]\d{9}$/;

export function normalizePhone(input: string): string {
  const digits = input.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) {
    return digits.slice(2);
  }
  if (digits.length === 11 && digits.startsWith("0")) {
    return digits.slice(1);
  }
  return digits;
}

export function isValidIndianPhone(phone: string): boolean {
  return INDIAN_MOBILE.test(normalizePhone(phone));
}

export function isValidPatientName(name: string): boolean {
  const trimmed = name.trim();
  return trimmed.length >= 2 && trimmed.length <= 80;
}

export function buildAppointmentWhatsAppUrl(name: string, phone: string): string {
  const digits = normalizePhone(phone);
  const text = [
    "New appointment request from Urosolution website",
    "",
    `Patient Name: ${name.trim()}`,
    `Phone: +91 ${digits}`,
    "",
    "Please contact the patient to confirm appointment.",
  ].join("\n");

  return `https://wa.me/919239528475?text=${encodeURIComponent(text)}`;
}

export type AppointmentPayload = {
  name: string;
  phone: string;
};

export function parseAppointmentPayload(
  body: unknown
): { ok: true; data: AppointmentPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request." };
  }

  const { name, phone } = body as Record<string, unknown>;

  if (typeof name !== "string" || !isValidPatientName(name)) {
    return {
      ok: false,
      error: "Please enter a valid name (at least 2 characters).",
    };
  }

  if (typeof phone !== "string" || !isValidIndianPhone(phone)) {
    return {
      ok: false,
      error: "Please enter a valid 10-digit Indian mobile number.",
    };
  }

  return {
    ok: true,
    data: { name: name.trim(), phone: normalizePhone(phone) },
  };
}
