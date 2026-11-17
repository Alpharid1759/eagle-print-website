import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Visit from "@/components/Visit";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <Marquee />
        <Services />
        <WhyUs />
        <Process />
        <Visit />
        <QuoteForm />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
