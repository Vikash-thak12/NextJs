import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full pb-10">
        <FloatingNav navItems={[
          { name: "Home", link: '/', icon: <FaHome /> },
          { name: "about", link: '/about', icon: <FaHome /> }
        ]} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
