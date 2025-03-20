"use client";

import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <section className="py-24 relative flex items-center justify-center min-h-screen overflow-hidden">
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center justify-center text-center">
        {/* <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Sourav K Sathyan <br /> Software Developer.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg">
          A subtle yet effective spotlight effect, because the previous version
          is used a bit too much these days.
        </p> */}
      </div>
    </section>
  );
}
