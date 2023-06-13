import { SessionProvider } from "next-auth/react";
import Head from "next/head"

import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<>
			<SessionProvider session={session}>
				<Head>
					<title>Innophoria</title>
				</Head>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SessionProvider>
		</>
	);
}
