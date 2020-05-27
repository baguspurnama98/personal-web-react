import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/point-down.json";
import picMe from "../assets/Pic3.png";
class Landing extends React.Component {
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
			<div className="landing  ">
				<div className="backgroundLanding animated fadeInLeft"></div>
				<div className="container containerLanding">
					<div className="row">
						<div className="col landing-left ">
							<h2 className="animated fadeInDown delay-1s">Hello,</h2>
							<h4 className="animated fadeInDown delay-1s">
								I'm Bagus Purnama
							</h4>
							<button className="btn btn-outline-info animated fadeIn delay-2s">
								See What I Do
							</button>
							<div
								id="pointDownLottie"
								className="lotties  animated fadeIn delay-2s"
							>
								<Lottie options={defaultOptions} height={100} width={100} />
							</div>
						</div>
						<div className="col landing-right">
							<button className="btn btn-outline-info animated headShake infinite ">
								Hire Me!
							</button>
							<img
								className="animated fadeInUp delay-1s"
								src={picMe}
								width="100"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;
