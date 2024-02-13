import Image from "next/image";

// components
import HeroContainer from "./components/heroContainer";

// extra 
 {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      </div> */}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-6">
      <HeroContainer />
    </main>
  );
}
