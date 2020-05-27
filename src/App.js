import React from "react";
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
			<div>
				<Landing />
				<AboutMe />
				<Power />
				<MainExperience />
				<Hobby />
				<Contact />
			</div>
		);
	}
}

export default App;
