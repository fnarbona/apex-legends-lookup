import React from "react";
import { SearchBar } from "../component/search-bar";
import { PlayerCard } from "../component/player-card";

export const Home = () => {
	return (
		<div className="">
			<Title />
			<SearchBar />
			<PlayerCard />
		</div>
	);
};

const Title = () => {
	return (
		<div
			id="header"
			className="d-flex justify-content-center align-items-center mt-5">
			<div id="header-logo" className="mr-3">
				<svg
					viewBox="0 0 1030 1000"
					className="apex-icon"
					data-v-09f97ef6="">
					<path
						d="M153 1000h-3c-1.215-1.273-2.302-2.706-3.663-3.797C97.574 957.115 48.785 918.061 0 879v-2c1.066-1.387 2.297-2.678 3.175-4.175 46.203-78.771 92.377-157.56 138.553-236.347C263.343 428.97 384.96 221.465 506.548 13.941 509.211 9.399 511.524 4.652 514 0h2c.713 1.636 1.266 3.366 2.161 4.895 58.428 99.751 116.888 199.483 175.334 299.224 107.813 183.981 215.611 367.97 323.452 551.935 4.159 7.095 8.693 13.97 13.053 20.946v2c-45.539 36.465-91.091 72.915-136.599 109.419-4.603 3.691-8.94 7.713-13.401 11.581h-3c-1.461-1.261-2.812-2.681-4.396-3.761-86.783-59.164-173.585-118.297-260.382-177.439-7.22-4.92-14.413-9.878-21.619-14.818l.277-1.091h165.979L515 379.257 273.792 803.105h165.679c-2.625 1.88-4.053 2.944-5.522 3.949-90.813 62.115-181.635 124.222-272.433 186.36-2.957 2.024-5.683 4.384-8.516 6.586z"
						data-v-09f97ef6=""></path>
				</svg>
			</div>
			<div id="header-text" className="d-flex flex-column">
				<h1 id="header-text-main" className="text-white">
					Welcome to Legends Lookup
				</h1>
				<h6 id="header-text-sub" className="text-white">
					look up any player on any platform to see their stats!
				</h6>
			</div>
		</div>
	);
};
