"use client";
import { useState } from "react";
import s from "../app/page.module.css";
import { questions } from "@/app/quiz/page";
import Link from "next/link";

function Quiz({ step, question, onClickVariant }) {
	const percent = Math.round((step / questions.length) * 100);
	console.log(percent);
	return (
		<main className={s.main}>
			<div className={s.content}>
				<div className={s.progress}>
					<span style={{ width: `${percent}%` }}></span>
				</div>
				<div className={s.quest}>{question.title}</div>

				{question.variants.map((text, index) => (
					<div key={text} onClick={() => onClickVariant(index)} className={s.answer}>
						{text}
					</div>
				))}
			</div>
		</main>
	);
}

function QuizEnd({ correct }) {
	return (
		<main className={s.main}>
			<div className={s.content}>
				<div className={s.correctAnswers}>
					Вы правильно ответили на {correct} вопроса из {questions.length}
				</div>
				<a href="/quiz"><button className={s.buttonAgain + " " + s.button}>Попробовать снова</button></a>
			</div>
		</main>
	);
}
export { Quiz };
export { QuizEnd };
