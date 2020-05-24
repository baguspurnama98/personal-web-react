import React from "react";
import Landing from "./components/Landing.jsx";
import AboutMe from "./components/aboutMe.jsx";
import Power from "./components/Power.jsx";
import MainExperience from "./components/MainExperience.jsx";

class App extends React.Component {
	render() {
		return (
			<div>
				<Landing />
				<AboutMe />
				<Power />
				<MainExperience />
			</div>
		);
	}
}

export default App;
