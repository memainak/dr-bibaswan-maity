import { Camera } from "lucide-react";
import Image from "next/image";
import { SITE } from "@/lib/site-data";

type DoctorProfileImageProps = {
  variant?: "hero" | "about";
  className?: string;
};

export default function DoctorProfileImage({
  variant = "hero",
  className = "",
}: DoctorProfileImageProps) {
  const isHero = variant === "hero";

  const frameClass = isHero
    ? "h-56 w-56 sm:h-64 sm:w-64"
    : "h-40 w-40 sm:h-48 sm:w-48";
  const shapeClass = isHero ? "rounded-full" : "rounded-2xl";

  if (SITE.profileImage) {
    return (
      <div
        className={`relative shrink-0 overflow-hidden shadow-lg ring-4 ring-white/30 ${shapeClass} ${frameClass} ${className}`}
      >
        <Image
          src={SITE.profileImage}
          alt={`Portrait of ${SITE.name}`}
          fill
          className="object-cover object-center"
          sizes={isHero ? "(max-width: 768px) 224px, 256px" : "(max-width: 768px) 160px, 192px"}
          priority={isHero}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex shrink-0 flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed shadow-inner ${frameClass} ${className} ${
        isHero
          ? "border-white/35 bg-white/10 text-white"
          : "border-primary-200 bg-primary-50 text-primary-700"
      }`}
    >
      <Camera
        className={isHero ? "h-12 w-12 opacity-80" : "h-10 w-10 opacity-70"}
        aria-hidden
      />
      <p
        className={`mt-3 max-w-[85%] text-center text-sm font-medium leading-snug ${
          isHero ? "text-primary-100" : "text-primary-600"
        }`}
      >
        Replace with doctor photo
        <span className="mt-1 block text-xs font-normal opacity-80">
          public/images/dr-bibaswan-maity.jpg
        </span>
      </p>
    </div>
  );
}
