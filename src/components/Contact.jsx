import React from "react";
import picMe from "../assets/Pic3.png";

class AboutMe extends React.Component {
	render() {
		return (
			<div className="Contact">
				<div className="container">
					<div className="row">
						<div className="col contactMe">
							<h1>Let's Work Together</h1>

							<a className="btn btn-primary">Contact Me!</a>
						</div>
						<div className="col contactImage">
							<div className="picOverlay2">
								<img src={picMe} id="overlayPicABoutMe2" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutMe;
