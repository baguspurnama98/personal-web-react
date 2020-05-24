import React from "react";
import StopwatchLottie from "./StopwatchLottie";
import Bullseye from "./BullseyeLottie.jsx";
import RocketLottie from "./RocketLottie";
class Power extends React.Component {
	render() {
		return (
			<div className="Power">
				<h1 className="text-center">My Life Motto</h1>
				<div className="container">
					<div className="row rowPower">
						<div className="col">
							<div id="power1" className="lotties">
								<StopwatchLottie />
							</div>
						</div>
						<div className="col">
							<div id="power2" className="lotties">
								<Bullseye />
							</div>
						</div>
						<div className="col">
							<div id="power3" className="lotties">
								<RocketLottie />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Power;
