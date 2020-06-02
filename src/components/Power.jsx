import React from "react";
import Lottie from "react-lottie";

import animationData1 from "../lotties/stopwatch.json";
import animationData2 from "../lotties/bullseye.json";
import animationData3 from "../lotties/rocket.json";

class Power extends React.Component {
	render() {
		const defaultOptions1 = {
			loop: true,
			autoplay: true,
			animationData: animationData1,
			rendererSettings: {
				preserveAspectRatio: "xMidYMid slice",
			},
		};

		const defaultOptions2 = {
			loop: true,
			autoplay: true,
			animationData: animationData2,
			rendererSettings: {
				preserveAspectRatio: "xMidYMid slice",
			},
		};

		const defaultOptions3 = {
			loop: true,
			autoplay: true,
			animationData: animationData3,
			rendererSettings: {
				preserveAspectRatio: "xMidYMid slice",
			},
		};
		return (
			<div className="Power">
				<h1 className="text-center">Why Me?</h1>
				<div className="container">
					<div className="row rowPower">
						<div className="col">
							<div id="power1" className="lotties">
								<Lottie options={defaultOptions1} height={250} width={200} />
							</div>
						</div>
						<div className="col">
							<div id="power2" className="lotties">
								<Lottie options={defaultOptions2} height={300} width={200} />
							</div>
						</div>
						<div className="col">
							<div id="power3" className="lotties">
								<Lottie options={defaultOptions3} height={300} width={200} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Power;
