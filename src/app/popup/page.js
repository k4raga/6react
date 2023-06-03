"use client";
import Image from "next/image";
import s from "../page.module.css";
import { useState } from "react";
import Header from "@/components/header";
import Popup from "@/components/popup";


export default function Home() {
	return (
		<>
			<Header />
			<Popup />
		</>
	);
}
