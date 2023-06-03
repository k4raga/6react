"use client";
import { useState } from "react";
import s from "../app/page.module.css";
export default function Popup() {
	const [open, setOpen] = useState(false);
	return (
		<main className={s.main}>
			<div className={s.button + " " + s.buttonPopup} onClick={() => setOpen(true)}>
				Открыть окно <img className={s.iconButton} src="../open.svg" width="30px"></img>
			</div>
			(
				<div className={s.popupWrapper + " " + s.active}>
					<div className={s.popup}>
						<div className={s.close} onClick={() => setOpen(false)}>x</div>
						<div className={s.popupTitle}>Это же гусь</div>
						<div className={s.popup__gus}>
							<img src="./gus.gif" alt="" srcset="" />
						</div>
					</div>
				</div>
			)
		</main>
	);
}
