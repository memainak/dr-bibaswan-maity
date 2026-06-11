import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function FloatingContactActions() {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 sm:bottom-8 sm:right-8"
      aria-label="Quick contact actions"
    >
      <CallButton
        variant="floating"
        label={`Call ${"Dr. Bibaswan Maity"}`}
      />
      <WhatsAppButton
        variant="floating"
        label="Message on WhatsApp"
        className="!static"
      />
    </div>
  );
}
