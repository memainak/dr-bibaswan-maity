import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { SITE } from "@/lib/site-data";

type WhatsAppButtonProps = {
  label?: string;
  className?: string;
  variant?: "primary" | "secondary" | "floating";
  onClick?: () => void;
};

export default function WhatsAppButton({
  label = "Chat on WhatsApp",
  className = "",
  variant = "primary",
  onClick,
}: WhatsAppButtonProps) {
  const base =
    variant === "floating"
      ? "flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition hover:scale-105 hover:bg-[#20bd5a] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:h-16 sm:w-16"
      : variant === "secondary"
        ? "btn-secondary border-[#25D366]/30 text-[#128C7E] hover:border-[#25D366]/50 hover:bg-[#25D366]/10"
        : "btn-whatsapp";

  return (
    <a
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${className}`}
      aria-label={label}
      onClick={onClick}
    >
      <WhatsAppIcon
        className={
          variant === "floating" ? "h-7 w-7 sm:h-8 sm:w-8" : "h-4 w-4 shrink-0"
        }
      />
      {variant !== "floating" && <span>{label}</span>}
    </a>
  );
}
