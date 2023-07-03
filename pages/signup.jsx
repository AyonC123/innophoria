import React from "react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function SignUp() {
	const { data: session } = useSession();
	const router = useRouter();

	if (!session) {
		return (
			<>
				<div className="flex justify-evenly items-center">
					<div className="sm:flex hidden justify-start flex-col gap-20 border-l-2 border-black p-12 pb-0">
						<div className="steps flex justify-start flex-col gap-20">
							<h1 className="step">Basic Details</h1>
							<h1 className="step">Verification</h1>
							<h1 className="step">Professional Details</h1>
							<h1 className="step">Employment Details</h1>
							<h1 className="step">Job Preference</h1>
						</div>
						<h1 className="stepEnd">Start Job Search</h1>
					</div>
					<div
						style={{ width: "500px" }}
						className="sm:bg-primary px-5 pb-16 pt-10 rounded-lg items-center flex flex-col justify-center gap-5"
					>
						<h1 className="font-bold sm:text-3xl sm:mb-6 mb-2 text-center">
							Sign Up
						</h1>
						<button
							onClick={() => signIn()}
							className="bg-white p-2 rounded-md sm:w-60 w-48 text-sm sm:text-base"
						>
							<p className="flex justify-around">
								<Image
									src="/github.png"
									alt="github image"
									height={10}
									width={25}
								/>
								Continue with Github
							</p>
						</button>
						<p>or</p>
						<input
							type="text"
							className="bg-white p-2 w-48 sm:w-60 rounded-md mb-4"
							placeholder="Full Name"
						/>
						<input
							type="text"
							className="bg-white p-2 w-48 sm:w-60 rounded-md mb-4"
							placeholder="Email Address"
						/>
						<input
							type="text"
							className="bg-white p-2 w-48 sm:w-60 rounded-md mb-4"
							placeholder="Enter Password"
						/>
						<input
							type="text"
							className="bg-white p-2 w-48 sm:w-60 rounded-md mb-4"
							placeholder="Mobile Number"
						/>
						<button className="bg-secondary p-2 rounded-md w-48 sm:w-60 text-white">
							Sign In
						</button>
						<Link href={"/signin"} className="text-primary text-sm">
							Sign In instead
						</Link>
						<p className="text-xs text-left sm:mx-8">
							By signing up you agree to Dexotita&apos;s Terms of Service and
							Privacy Policy and agree to receive marketing communications from
							Dexotita at the email address provided.{" "}
						</p>
					</div>
				</div>
			</>
		);
	} else {
		router.push("/");
	}
}
