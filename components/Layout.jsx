import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSession } from "next-auth/react";

export default function Layout({ children }) {
	const { data: session } = useSession();

	return (
		<>
			<Navbar session={session} />
			<main className="p-10">{children}</main>
			<Footer />
		</>
	);
}
