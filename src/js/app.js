import React, { useEffect } from "react";

//import context
import { Store } from "./context/store.context";

//import components
import { Navbar } from "./component/navbar";
import { Home } from "./pages/home";

//create your first component
export function App() {
	return (
		<Store>
			{/* <Navbar /> */}
			<Home />
		</Store>
	);
}
