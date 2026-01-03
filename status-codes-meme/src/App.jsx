import React from "react";
import Pagination from "./components/Pagination";
import logo from "./assets/image/logo.webp"

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black relative flex flex-col">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.05) 0%, transparent 40%), linear-gradient(120deg, #0f0e17 0%, #1a1b26 100%)",
        }}
      />

      <main className="flex-grow z-10">
        <img src={logo} alt="logo de la pagina " />
      </main>
          
      <div className="z-10 flex justify-center pb-6">
        <Pagination />
      </div>
    </div>
  );
};

export default App;
