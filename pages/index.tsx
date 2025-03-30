import Navbar from "@/components/Navbar";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <About />
    </div>
  );
}
