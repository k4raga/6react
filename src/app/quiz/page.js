"use client";
import Image from "next/image";
import s from "../page.module.css";
import { useState } from "react";
import Header from "@/components/header";
import { Quiz, QuizEnd } from "@/components/quiz";


const questions = [
	{
		title: "React - это ...",
		variants: ["Библиотека", "Фраемворк", "Приложение"],
		correct: 0,
	},
	{
		title: "Компонент - это ...",
		variants: ["Приложение", "Часть приложения", "Фраемоврк"],
		correct: 1,
	},
	{
		title: "State - это ...",
		variants: ["неведомая штука", "Красное деревце", "Фраемоврк"],
		correct: 1,
	},
];

export default function Home() {
	const [step, setStep] = useState(0);
	const [correct, setCorrcet] = useState(0);
	const question = questions[step];

	const onClickVariant = (index) => {
		console.log(step, index);
		setStep(step + 1);
		if (index === question.correct){
			setCorrcet(correct + 1)
		}
	};
	
	return (
		<>
			<Header />

			{step !== questions.length ? <Quiz step={step} question={question} onClickVariant={onClickVariant} /> : <QuizEnd correct={correct} />}
		</>
	);
}

export {questions}