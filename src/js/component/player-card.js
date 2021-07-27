import React, { useContext, useEffect } from "react";
import { Loader } from "../component/loader";

import { Context } from "../context/store.context";

export const PlayerCard = () => {
	const [state, dispatch] = useContext(Context);

	useEffect(() => {
		console.log("printing from player card: ", state);
	}, [state]);

	return (
		<div
			id="player-card"
			className="w-50 mx-auto pb-5 mt-5 d-flex flex-column text-center justify-content-center bg-dark rounded">
			{/* <div id="player-card-banner" className="mx-auto mb-5">
						<img className="rounded" src={state.legend.banner} />
					</div> */}
			<div id="player-card-name" className="mb-3 mx-auto text-white">
				<h1>{state.name}</h1>
			</div>
			<div id="player-card-details" className="row bg-dark m-0 py-3">
				{state.loading ? (
					<Loader />
				) : (
					<>
						<div className="col d-flex justify-content-end">
							<img src={state.rank.image} />
						</div>
						<div className="col d-flex flex-column justify-content-center align-items-start text-white">
							<div className="d-flex flex-column align-items-start">
								<div>Tier: {state.rank.tier}</div>
								<div>Division: {state.rank.division}</div>
								<div>Score: {state.rank.score}</div>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};
