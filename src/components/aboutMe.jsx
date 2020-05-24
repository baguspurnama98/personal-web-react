import React from "react";

class AboutMe extends React.Component {
	render() {
		return (
			<div className="aboutMe">
				<div className="container">
					<div className="row">
						<div className="col">
							<h1>About Me</h1>
							<p>
								I'm a Front End Developer and Data Enthusiast from Surabaya
								Indonesia. I graduated in 2020 at Brawijaya University in Malang
								Indonesia. I also like AI, while my compilation lecture took the
								specialization. My code always prioritizes neatness and beauty.
								I understand programming languages like HTML, PHP, Javascript,
								CSS, jQuery, ReactJS, and Python.
							</p>
							<button className="btn btn-primary">Hire Me</button>
							<button className="btn btn-outline-info">See My CV</button>
						</div>
						<div className="col">
							<div className="picOverlay">
								<img
									src={process.env.PUBLIC_URL + "/assets/Pic3.png"}
									id="overlayPicABoutMe"
								/>
								<img
									src={process.env.PUBLIC_URL + "/assets/Pic3.png"}
									id="picAboutMe"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutMe;
