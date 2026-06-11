import { Phone } from "lucide-react";
import { SITE } from "@/lib/site-data";

type CallButtonProps = {
  label?: string;
  className?: string;
  variant?: "primary" | "secondary" | "floating";
  onClick?: () => void;
};

export default function CallButton({
  label = "Call Now",
  className = "",
  variant = "primary",
  onClick,
}: CallButtonProps) {
  const base =
    variant === "floating"
      ? "flex h-14 w-14 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg shadow-primary-500/40 transition hover:scale-105 hover:bg-primary-600 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 sm:h-16 sm:w-16"
      : variant === "secondary"
        ? "btn-secondary"
        : "btn-primary";

  return (
    <a
      href={`tel:${SITE.phone}`}
      className={`${base} ${className}`}
      aria-label={label}
      onClick={onClick}
    >
      <Phone
        className={
          variant === "floating" ? "h-7 w-7 sm:h-8 sm:w-8" : "h-4 w-4 shrink-0"
        }
        aria-hidden
      />
      {variant !== "floating" && <span>{label}</span>}
    </a>
  );
}
