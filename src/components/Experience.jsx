import React from "react";

class Experience extends React.Component {
	render() {
		return (
			<div className="col-sm">
				<a href="#">
					<div className="itemExperience">
						<div className="picExperience">
							<img src={this.props.image} />
						</div>
						<h4>{this.props.name}</h4>
					</div>
				</a>
			</div>
		);
	}
}

export default Experience;
