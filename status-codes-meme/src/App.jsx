import React from "react";
import logoo from "./assets/image/logoo.webp";
import ListCard from "./components/ListCard";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black relative flex flex-col">
      <div
        className="absolute inset-0 z-0"
        style={{
      background: "#020617",
      backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
      `,
      backgroundSize: "32px 32px, 32px 32px, 100% 100%",
    }}
      />

      <main className="z-10 flex-grow  ">
        <section>
          <div className="flex justify-center">
            <img src={logoo} alt="logo de la web"  className="w-20 sm:w-24 md:w-28 h-auto mb-3"/>
            <h1 className="text-white text-4xl md:text-6xl font-bold my-4">Status<span className="text-indigo-600">MEME</span></h1>
          </div>
        </section>
        <section>
          <ListCard/>
        </section>
      </main>
    </div>
  );
};

export default App;


