"use client";
import { useState } from "react";
import s from "../app/page.module.css";

export default function BlockConverter() {
	return (
		<>
			<div className={s.BlockConverter}>
				<div className={s.BlockConverter__choose}></div>
				<div className={s.BlockConverter__input}>
					<input className={s.BlockConverter__inputNumber} type="number" placeholder="0" />
				</div>
			</div>
		</>
	);
}
