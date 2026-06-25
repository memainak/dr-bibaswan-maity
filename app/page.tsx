import About from "@/components/About";
import AppointmentForm from "@/components/AppointmentForm";
import ClinicGallery from "@/components/ClinicGallery";
import FloatingContactActions from "@/components/FloatingContactActions";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Videos from "@/components/Videos";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <ClinicGallery />
        <Videos />
        <Testimonials />
        <AppointmentForm />
        <Location />
      </main>
      <Footer />
      <FloatingContactActions />
    </>
  );
}
