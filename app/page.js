import Image from "next/image";
import Navbar from "./components/Navbar/page";
import Hero from "./components/Herosection/page";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full w-full flex-col items-center justify-between p-5">
      <Navbar />
      <Hero />
    </main>
  );
}
