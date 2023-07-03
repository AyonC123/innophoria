import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

export default function SignUp() {
	const { data: session } = useSession();
	const router = useRouter();

	if (!session) {
		return (
			<>
				<div className="flex justify-center items-center">
					<div
						style={{ width: "500px" }}
						className="bg-primary px-5 pb-16 pt-10 rounded-lg items-center flex flex-col justify-center gap-5"
					>
						<h1 className="font-bold sm:text-3xl sm:mb-6 mb-2 text-center">
							Find the perfect <br /> job for{" "}
							<span className="text-primary mb-2">YOU</span>
						</h1>
						<button
							onClick={() => signIn()}
							className="bg-white p-2 rounded-md sm:w-60 w-48 text-sm sm:text-base"
						>
							<p className="flex justify-around">
								<img
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
							placeholder="email address"
						/>
						<button className="bg-secondary p-2 rounded-md w-48 sm:w-60 text-white">
							Continue
						</button>
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
