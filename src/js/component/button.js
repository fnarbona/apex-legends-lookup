import React from "react";

export const Button = ({ value, text, active, onClick }) => {
	let activeClass = active ? " btn-active" : "";

	return (
		<button
			style={text == "PC" ? { borderRadius: "5px 0px 0px 5px" } : null}
			className={
				"btn btn-dark text-white border-0 " +
				(text === "PC" ? null : "rounded-0") +
				activeClass
			}
			onClick={() => onClick(value)}>
			{text}
		</button>
	);
};
