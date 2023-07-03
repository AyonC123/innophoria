import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<main className="sm:px-10 flex justify-between sm:mb-0 mb-10 ">
				<div className="texts text-center sm:text-left flex-col justify-start gap-5">
					<h1 className="font-bold text-lg sm:text-6xl">
						Skills are the <span className="text-primary">steps</span> <br />
						to your <span className="text-primary">career growth</span>
					</h1>
					<p className="text-base sm:text-lg sm:mb-0 mb-5">
						Asses your skills to stand out to employers
					</p>
					<button className="bg-secondary p-2 rounded-md text-white w-40">
						Take skill test
					</button>
				</div>
				<Image
					src={"/climbingLadder.png"}
					alt="climbing ladder"
					height={100}
					width={100}
					className="hidden sm:block"
				/>
			</main>
			<article className="px-10">
				<h1 className="text-lg font-bold pb-5">Assesment Categories</h1>
				<div className="flex justify-evenly gap-10 flex-wrap items-center">
					<div className="text-center flex flex-col justify-center items-center bg-white shadow-lg  rounded-lg p-5 gap-2">
						<h1 className="font-bold text-lg">Software Developer tests</h1>
						<p>1000+ tests taken</p>
						<Link href={"#"} className="text-primary">
							view Test ➜
						</Link>
					</div>
					<div className="flex flex-col justify-center text-center items-center bg-white shadow-lg rounded-lg p-5 gap-2">
						<h1 className="font-bold text-lg">Software Testing tests</h1>
						<p>1200+ tests taken</p>
						<Link href={"#"} className="text-primary">
							view Test ➜
						</Link>
					</div>
					<div className="flex flex-col justify-center text-center items-center bg-white shadow-lg rounded-lg p-5 gap-2">
						<h1 className="font-bold text-lg">Cyber security tests</h1>
						<p>7000+ tests taken</p>
						<Link href={"#"} className="text-primary">
							view Test ➜
						</Link>
					</div>
					<div className="flex flex-col justify-center text-center items-center bg-white shadow-lg rounded-lg p-5 gap-2">
						<h1 className="font-bold text-lg">Non-Engineering tests</h1>
						<p>8000+ tests taken</p>
						<Link href={"#"} className="text-primary">
							view Test ➜
						</Link>
					</div>
				</div>
			</article>
		</>
	);
}
