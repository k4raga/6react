"use client";
import Image from "next/image";
import s from "../page.module.css";
import { useState } from "react";
import Header from "@/components/header";
import BlockConverter from "@/components/converter";
export default function Home() {
	return (
		<>
			<Header />
			<main className={s.main}>
				<div className={s.converterWrap + " " + s.grid}>
					<BlockConverter />
					<BlockConverter />
				</div>
			</main>
		</>
	);
}
