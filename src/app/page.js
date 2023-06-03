"use client";
import Image from "next/image";
import s from "./page.module.css";
import { useState } from "react";
import Header from "@/components/header";
import Link from "next/link";
export default function Home() {
	return (
		<>
			<Header />
			<main className={s.main}>
				<div className={s.wrapperLink}>
					<div className={s.titleMain}>Проекты</div>
					<div className={s.linkContainer}>
						<Link href="/counter">
							{" "}
							<button className={s.buttonLink + " " + s.button}>Counter</button>
						</Link>
						<Link href="/popup">
							{" "}
							<button className={s.buttonLink + " " + s.button}>Popup</button>
						</Link>
						<Link href="/quiz">
							{" "}
							<button className={s.buttonLink + " " + s.button}>QUIZ</button>
						</Link>
						<Link href="/users">
							{" "}
							<button className={s.buttonLink + " " + s.button}>Users list</button>
						</Link>
						<Link href="/converter">
							{" "}
							<button className={s.buttonLink + " " + s.button}>Converter</button>
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}
