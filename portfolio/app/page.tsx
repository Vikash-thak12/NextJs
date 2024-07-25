import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="relative bg-black flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl pb-10">
        <FloatingNav navItems={[
          { name: "Home", link: '/', icon: <FaHome /> },
          { name: "about", link: '/', icon: <FaHome /> }
        ]} />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
