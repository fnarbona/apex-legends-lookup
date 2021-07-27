import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { Context } from "../context/store.context";

import { Button } from "./button";
// import { InputField } from "./input-field";

export const SearchBar = () => {
	const [state, dispatch] = useContext(Context);

	const [platform, setPlatform] = useState("PC");
	const [player, setPlayer] = useState("");
	const [active, setActive] = useState({ PC: true, X1: false, PS4: false });

	useEffect(() => {
		// console.log(player, platform);
		console.log("state: ", state);
	}, [state]);

	const changePlatform = newValue => {
		let copy = {
			PC: false,
			X1: false,
			PS4: false
		};

		copy[newValue] = true;
		setActive(copy);
		setPlatform(newValue);
	};

	const changePlayer = newValue => {
		setPlayer(newValue);
	};

	const handleInputEnter = e => {
		e.key === "Enter" && player.trim() !== "" ? getPlayerData() : null;
	};

	const getPlayerData = () => {
		if (player.trim() !== "") {
			dispatch({ type: "loading" });
			axios
				.get(
					`https://api.mozambiquehe.re/bridge?version=5&platform=${platform}&player=${player}&auth=do6PTHJ3HKXjaNElAgea`
				)
				.then(res => {
					dispatch({
						type: "update_player",
						payload: res.data
					});
				})
				.then(console.log(state))
				.catch(err => console.log(err));
		}
	};

	return (
		<div
			id="search-bar"
			className="w-50 mx-auto text-center mt-5 d-flex justify-content-center">
			<div className="d-flex">
				<Button
					value="PC"
					text="PC"
					active={active.PC}
					onClick={changePlatform}
				/>
				<Button
					value="X1"
					text="XBOX"
					active={active.X1}
					onClick={changePlatform}
				/>
				<Button
					value="PS4"
					text="PS4"
					active={active.PS4}
					onClick={changePlatform}
				/>
			</div>
			<div id="search-input" className="d-flex">
				<input
					// className="form-control"
					placeholder="Enter player name"
					type="text"
					onChange={e => changePlayer(e.target.value)}
					onKeyDown={e => handleInputEnter(e)}
				/>
				<span
					className="btn btn-dark text-white d-flex"
					onClick={getPlayerData}>
					Search
				</span>
			</div>
		</div>
	);
};
