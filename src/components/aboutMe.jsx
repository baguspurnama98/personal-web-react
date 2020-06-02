import React from "react";
import picMe from "../assets/Pic3.png";

class AboutMe extends React.Component {
	render() {
		return (
			<div className="aboutMe">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<h1>About Me</h1>
							<p>
								I'm a Front End Developer and Data Enthusiast from Surabaya
								Indonesia. I graduated in 2020 at Brawijaya University in Malang
								Indonesia. I also like AI, while my compilation lecture took the
								specialization. My code always prioritizes neatness and beauty.
								I understand programming languages like HTML, PHP, Javascript,
								CSS, jQuery, ReactJS, and Python.
							</p>
							<a className="btn btn-primary">Hire Me</a>
							<a className="btn btn-outline-info">See My CV</a>
						</div>
						<div className="col-md-6 aboutMeImage">
							<div className="picOverlay">
								<img src={picMe} id="overlayPicABoutMe" />
								<img src={picMe} id="picAboutMe" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutMe;
