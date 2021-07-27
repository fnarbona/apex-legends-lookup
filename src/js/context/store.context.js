import React, { createContext, useReducer } from "react";
import { reducer } from "../reducer/player.reducer";

const initialState = {
	name: "xGatorStompin",
	platform: "PS4",
	rank: {
		division: 1,
		tier: "Gold",
		score: 4515,
		image: "https://api.mozambiquehe.re/assets/ranks/gold1.png"
	},
	legend: {
		name: "Bloodhound",
		banner: "https://api.mozambiquehe.re/assets/banners/bloodhound.jpg",
		data: [
			{
				stat: "Season 7 kills",
				value: 484
			},
			{
				stat: "Season 7 wins",
				value: 21
			},
			{
				stat: "Kills",
				value: 1379
			}
		]
	},
	loading: false
};

export const Context = createContext(initialState);

export const Store = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Context.Provider value={[state, dispatch]}>
			{children}
		</Context.Provider>
	);
};
