import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<main className="px-10 flex justify-between flex-wrap">
				<div className="texts flex flex-col justify-start gap-5">
					<h1 className="font-bold text-6xl">
						Skills are the <span className="text-primary">steps</span> <br />
						to your <span className="text-primary">career growth</span>
					</h1>
					<p className="text-xl">Asses your skills to stand out to employers</p>
					<button className="bg-secondary p-2 rounded-md text-white w-40">
						Take skill test
					</button>
				</div>
				<Image
					src={"/climbingLadder.png"}
					alt="climbing ladder"
					height={100}
					width={100}
				/>
			</main>
			<article className="px-10">
				<h1 className="text-xl font-bold pb-5">Assesment Categories</h1>
				<div className="flex justify-evenly gap-10 flex-wrap items-center">
					<div className="flex flex-col justify-center items-center border-2 border-primary rounded-lg p-5 gap-2">
						<h1 className="font-bold text-xl">Software Developer tests</h1>
						<p>1000+ tests taken</p>
						<Link href={"#"} className="text-primary">
							view Test ➜
						</Link>
					</div>
					<div className="flex flex-col justify-center items-center border-2 border-primary rounded-lg p-5 gap-2">
						<h1 className="font-bold text-xl">Software Testing tests</h1>
						<p>1200+ tests taken</p>
						<Link href={"#"} className="text-primary">
							view Test ➜
						</Link>
					</div>
					<div className="flex flex-col justify-center items-center border-2 border-primary rounded-lg p-5 gap-2">
						<h1 className="font-bold text-xl">Cyber security tests</h1>
						<p>7000+ tests taken</p>
						<Link href={"#"} className="text-primary">
							view Test ➜
						</Link>
					</div>
					<div className="flex flex-col justify-center items-center border-2 border-primary rounded-lg p-5 gap-2">
						<h1 className="font-bold text-xl">Non-Engineering tests</h1>
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
