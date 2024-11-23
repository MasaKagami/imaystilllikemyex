// import Image from "next/image";
import Navbar from "./component/navbar/navbar";
import Instruction from "./component/instruction/instruction";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col m-auto">
      <Navbar/>
      <div className="w-full max-w-[90%]">
        <Instruction/>
      </div>
    </div>
  );
}