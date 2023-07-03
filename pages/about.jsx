import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
      <main className="sm:px-10 flex justify-between sm:mb-0 mb-10 ">
        <div className="texts text-center sm:text-left flex-col justify-start gap-5">
          <h1 className="font-bold text-lg sm:text-6xl">
            About <span className="text-primary">Dexotita.</span>
          </h1>
        </div>
        <Image
          src={"/climbingLadder.png"}
          alt="climbing ladder"
          height={100}
          width={100}
          className="hidden sm:block"
        />
      </main>
    </>
  );
}
