"use client";
import { useState } from "react";
import s from "../app/page.module.css";
import Link from "next/link";
import { items, changeInput, onClickInvite, onClickSendInvites } from "../app/users/page.js";

function Users({ items, searchValue, changeInput, invites, onClickInvite, onClickSendInvites }) {
	console.log(invites);
	return (
		<main className={s.main}>
			<div className={s.content}>
				<input onChange={changeInput} value={searchValue} className={s.searchInput} type="text" placeholder="Найти пользователя "></input>
				<div className={s.Users}>
					{items
						.filter((obj) => {
							const fullName = (obj.first_name + obj.last_name).toString().toLowerCase();
							if (fullName.includes(searchValue.toLowerCase()) || obj.email.includes(searchValue.toLowerCase())) {
								return true;
							}
						})
						.map((obj) => (
							<User onClickInvite={onClickInvite} isInvited={invites.includes(obj.id)} key={obj.id} {...obj} />
						))}
				</div>
				{invites.length > 0 && (
					<button onClick={onClickSendInvites} className={s.UsersButton}>
						Отправить приглашение
					</button>
				)}
			</div>
		</main>
	);
}

function User({ id, email, first_name, avatar, last_name, onClickInvite, isInvited }) {
	console.log(id);
	return (
		<div className={s.User}>
			<div className={s.User__wrapper}>
				<img className={s.UserImg} src={avatar} alt="Иконка пользователя" />
				<div className={s.UserTitleWrap}>
					<div className={s.User__name}>
						{first_name} {last_name}
					</div>
					<div className={s.User__email}>{email}</div>
				</div>
			</div>
			<div onClick={() => onClickInvite(id)} className={s.plus}>
				{isInvited ? "-" : "+"}
			</div>
		</div>
	);
}

function Success({ count }) {
	return (
		<div className={s.popupWrapper + " " + s.active}>
			<div className={s.popup + " " + s.popupUsers}>
				<div className={s.close} onClick={() => setOpen(false)}></div>
				<div className={s.popupTitle}>Победа всем {count} пользователям отправилось приглашение</div>
			</div>
		</div>
	);
}
export { Users, Success };
