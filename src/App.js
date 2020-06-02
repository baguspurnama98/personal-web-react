/*
TO DO LIST:
- Isi link my axperience
- buat halaman software, dll
- Animasi Hobby (Buat when scrolling)
- buat halaman responsive

*/

import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style/style.css";
import "./style/animate.min.css";
import "./style/responsive.css";
import Landing from "./components/Landing.jsx";
import AboutMe from "./components/aboutMe.jsx";
import Power from "./components/Power.jsx";
import MainExperience from "./components/MainExperience.jsx";
import Hobby from "./components/Hobby.jsx";
import Contact from "./components/Contact.jsx";

class App extends React.Component {
	render() {
		return (
			<>
				<Landing />
				<AboutMe />
				<Power />
				<MainExperience />
				<Hobby />
				<Contact />

				{/* <BrowserRouter>
					<Switch>
						<Route path="/" exact component={Landing} />
						<Route path="/hobby" exact component={Hobby} />
					</Switch>
				</BrowserRouter> */}
			</>
		);
	}
}

export default App;
