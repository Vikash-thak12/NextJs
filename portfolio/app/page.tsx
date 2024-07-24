import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <h1 className="text-3xl text-white">Hey buddy</h1>
        <Hero />
      </div>
    </main>
  );
}
