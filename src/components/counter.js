"use client";
import { useState } from "react";
import s from "../app/page.module.css";
export default function Counter() {
	const [value, setvalue] = useState(0);
	const onClickPlus = () => {
		setvalue(value + 1);
	};
	const onClickMinus = () => {
		setvalue(value - 1);
	};
	return (
		<main className={s.main}>
			<div className={s.content}>
				
				<div className={s.title}>Счетчик</div>
				<div className={s.counter}>{value}</div>
				<div className={s.buttonWrapper}>
					<button onClick={() => onClickMinus()} className={s.buttonMinus + " " + s.button}>
						Минус один
					</button>
					<button onClick={() => onClickPlus()} className={s.buttonPlus + " " + s.button}>
						Плюс один
					</button>
				</div>
			</div>
		</main>
	);
}
