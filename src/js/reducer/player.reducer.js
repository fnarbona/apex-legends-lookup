import React from "react";

export const reducer = (state, action) => {
	switch (action.type) {
		case "update_player": {
			let { global, legends } = action.payload;
			let statTest = legends.selected.data.length;
			return {
				name: global.name,
				platform: global.platform,
				rank: {
					division:
						typeof global.rank.rankDiv !== undefined
							? global.rank.rankDiv
							: null,
					tier:
						typeof global.rank.rankName !== undefined
							? global.rank.rankName
							: null,
					score:
						typeof global.rank.rankScore !== undefined
							? global.rank.rankScore
							: null,
					image:
						typeof global.rank.rankImg !== undefined
							? global.rank.rankImg
							: null
				},
				legend: {
					name:
						typeof legends.selected.LegendName !== undefined
							? legends.selected.LegendName
							: null,
					banner:
						typeof legends.selected.ImgAssets.banner !== undefined
							? legends.selected.ImgAssets.banner
							: null,
					data: [
						{
							stat:
								statTest > 0
									? legends.selected.data[0].name
									: null,
							value:
								statTest > 0
									? legends.selected.data[0].value
									: null
						},
						{
							stat:
								statTest > 1
									? legends.selected.data[1].name
									: null,
							value:
								statTest > 1
									? legends.selected.data[1].value
									: null
						},
						{
							stat:
								statTest > 2
									? legends.selected.data[2].name
									: null,
							value:
								statTest > 2
									? legends.selected.data[2].value
									: null
						}
					]
				},
				loading: false
			};
		}
		case "loading":
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
};
