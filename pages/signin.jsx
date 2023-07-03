import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function SingIn() {
	const { data: session } = useSession();
	const router = useRouter();

	if (!session) {
		return (
			<>
				<div className="flex justify-evenly items-center">
					<Image
						src={"/girlUsingDesktop.png"}
						alt="girl using desktop"
						width={400}
						height={400}
						className="hidden sm:block"
					/>
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
							placeholder="Email Address"
						/>
						<input
							type="text"
							className="bg-white p-2 w-48 sm:w-60 rounded-md mb-4"
							placeholder="Enter Password"
						/>
						<button className="bg-secondary p-2 rounded-md w-48 sm:w-60 text-white">
							Sign In
						</button>
						<Link href={"/signup"} className="text-primary text-sm">
							Sign Up instead
						</Link>
					</div>
				</div>
			</>
		);
	} else {
		router.push("/");
	}
}
