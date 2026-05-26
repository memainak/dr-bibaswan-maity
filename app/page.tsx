import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Location />
      </main>
      <Footer />
    </>
  );
}
