import React from "react";
import { Header } from "./components/Header";
import { Contact } from "./components/Contact";
import { Cards } from "./components/Cards";

export const App = () => {
	return (
		<main className="main">
			<Header />
			<Contact />
			<Cards />
		</main>
	);
};

export default App;
