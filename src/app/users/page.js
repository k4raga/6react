"use client";
import Image from "next/image";
import s from "../page.module.css";
import { useState, useEffect } from "react";
import Header from "@/components/header";
import { Users, Success } from "@/components/users";

export default function Home() {
	const [users, setUsers] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [invites, setInvites] = useState([]);
	const [open, setOpen] = useState(false);
	const [success, setSuccess] = useState(false);
	const changeInput = (event) => {
		setSearchValue(event.target.value);
	};

	useEffect(() => {
		fetch("https://reqres.in/api/users")
			.then((res) => res.json())
			.then((json) => {
				setUsers(json.data);
			})
			.catch((err) => {
				console.warn(err);
				alert("Произошла ошибка");
			});
	}, []);
	const onClickInvite = (id) => {
		if (invites.includes(id)) {
			setInvites((prev) => prev.filter((_id) => _id !== id));
		} else {
			setInvites((prev) => [...prev, id]);
		}
	};

	const onClickSendInvites = () => {
		setSuccess(true);
	};

	return (
		<>
			<Header />
			{success ? (
				<Success count={invites.length} />
			) : (
				<Users
					onClickSendInvites={onClickSendInvites}
					invites={invites}
					changeInput={changeInput}
					searchValue={searchValue}
					items={users}
					onClickInvite={onClickInvite}
				/>
			)}
		</>
	);
}
