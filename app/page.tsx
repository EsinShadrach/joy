"use client";

import { useEffect, useState } from "react";

export default function Home() {
	const [show, setShow] = useState<boolean>(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShow(true);
		}, 3000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<main className="container mx-auto">
			<div className="typewriter w-fit mx-auto text-center space-y-2">		
						<H1 className=" py-2 base-typewriter w-fit">
						 Deeznuts
						</H1>
			</div>
		</main>
	);
}

function H1({
	children,
	className,
}: {
	children: React.ReactNode;
	className: string;
}) {
	return <h1 className={`sm:text-5xl text-xl ${className}`}>{children}</h1>;
}
