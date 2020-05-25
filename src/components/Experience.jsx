import React from "react";

class Experience extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-5 picExperience">
						<img src={this.props.image} />
					</div>
					<div className="col-7">
						<h4>{this.props.name}</h4>
						<p>{this.props.desc}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Experience;
