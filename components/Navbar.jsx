import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ session }) {
	const [open, setOpen] = useState(false);
	return (
		<nav className="flex justify-between p-10 items-center text-center sticky top-0 backdrop-blur-xl">
			{/* <Image src={"/logo.png"} alt="logo image" height={30} width={125} /> */}
			<h1 className="text-3xl font-bold">Dexotita.</h1>
			<ul className="hidden sm:flex gap-10 items-center">
				<li className="hover:font-bold ease-linear duration-150">
					<Link href="/">Home</Link>
				</li>
				<li className="hover:font-bold ease-linear duration-150">
					<Link href="/about">About</Link>
				</li>
				<li className="hover:font-bold ease-linear duration-150">
					{session ? (
						<button
							onClick={() => signOut()}
							className="hidden sm:block rounded-lg "
						>
							Log Out
						</button>
					) : (
						<Link href="/signin" className="hidden sm:block rounded-lg ">
							Sign In
						</Link>
					)}
				</li>
			</ul>
			<div className="block sm:hidden">
				{!open ? (
					<FontAwesomeIcon
						icon={faBars}
						className="cursor-pointer z-50 text-2xl"
						onClick={() => setOpen(!open)}
					/>
				) : (
					<FontAwesomeIcon
						icon={faXmark}
						className="cursor-pointer z-50 text-2xl"
						onClick={() => setOpen(!open)}
					/>
				)}
				{open && (
					<ul className="flex flex-col justify-center items-center absolute top-28 right-0 left-0 gap-5 bg-main w-full py-8 shadow-bleed text-black">
						<li className="hover:font-bold ease-linear duration-150">
							<Link href="/">Home</Link>
						</li>
						<li className="hover:font-bold ease-linear duration-150">
							<Link href="/about">About</Link>
						</li>
						<li className="hover:font-bold ease-linear duration-150">
							{session ? (
								<button onClick={() => signOut()} className="rounded-lg">
									Log Out
								</button>
							) : (
								<Link href="/signup" className=" rounded-lg">
									Sign In
								</Link>
							)}
						</li>
					</ul>
				)}
			</div>
		</nav>
	);
}
