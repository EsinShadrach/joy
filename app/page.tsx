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
				{!show && (
					<>
						<H1
							className={`animation-1 py-2 base-typewriter w-fit`}
						>
							Hi, Joy..
						</H1>
						<H1 className="animation-2 py-2 base-typewriter w-fit">
							I&apos;m sorry for what I did.
						</H1>
						<H1 className="animation-3 py-2 base-typewriter w-fit">
							I know it was stupid
						</H1>
					</>
				)}
				{show && (
					<>
						<H1 className="animation-1 py-2 base-typewriter w-fit">
							but, I am genuinely sorry : (
						</H1>
						<H1 className="animation-1 py-2 base-typewriter w-fit">
							Please Reply
						</H1>
					</>
				)}
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
