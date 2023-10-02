import Image from "next/image";
import Navbar from "./components/Navbar/page";
import Hero from "./components/Herosection/page";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full w-full flex-col items-center  p-5">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}
