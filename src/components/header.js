import s from "../app/page.module.css";
import Link from "next/link";
export default function Header() {
	return (
		<header className={s.header}>
			<Link className={s.header__link} href="/">
				<div className={s.header__logo + " " + s.container}>6 projects</div>
			</Link>
		</header>
	);
}
