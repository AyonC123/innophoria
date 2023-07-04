import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
      <main className="sm:px-10 flex justify-between sm:mb-0 mb-10 gap-40">
        <div className="texts text-center sm:text-left flex-col justify-start gap-5">
          <h1 className="font-bold text-xl sm:text-6xl">
            About <span className="text-primary">Dexotita.</span>
          </h1>
          <p className="text-base sm:text-xl">
            Job seekers are unsure of what skills employers are looking for.
            Thus employers are unable to find employees with the skill
            requirements.
            <br />
            <br />
            Job aspirants are unable to identify whether they would be suitable
            & are not sure of what they would be expected to do as an employe
            for a job position
            <br />
            <br />
            The solution <b>Dexiotita</b> - A platform which enables job seekers
            and employers to connect. Job seekers get an opportunity to look for
            a job which matches their skillset.
            <br />
            Employers, startup owners and entrepreneurs get an opportunity to
            find a good employee.
            <br />
            Job seekers know better about what they would would be expected to
            do as an emplyee. Job aspirant get to know what skills are in demand
            and get an opportunity to expand their skillset.
            <br />
            Thus, reducing the skill gap
          </p>
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
