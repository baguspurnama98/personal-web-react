import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/bullseye.json";

class Bullseye extends Component {
	render() {
		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: animationData,
			rendererSettings: {
				preserveAspectRatio: "xMidYMid slice",
			},
		};

		return (
			<div>
				<Lottie options={defaultOptions} height={300} width={200} />
			</div>
		);
	}
}

export default Bullseye;
