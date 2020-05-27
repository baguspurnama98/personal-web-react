import React from "react";
import Experience from "./Experience";
import pic1 from "../assets/vector2.svg";
import pic2 from "../assets/vector1.svg";
import pic3 from "../assets/vector4.svg";
import pic4 from "../assets/vector3.svg";
class MainExperience extends React.Component {
	render() {
		const expeList = [
			{
				name: "Software Engineering",
				image: pic1,
				link: "baguspurnama.com",
			},
			{
				name: "Hybrid App",
				image: pic2,
				link: "Build Hybrid Application for Multiplatform",
			},
			{
				name: "UX/UI",
				image: pic3,
				link: "Do UX Research",
			},
			{
				name: "Machine Learning",
				image: pic4,
				link: "Build System with AI",
			},
		];

		return (
			<div className="mainExperience">
				<h1 className="text-center">My Experience</h1>
				<div className="experience-item container text-center">
					<div className="row">
						{expeList.map((expeItem) => {
							return (
								<Experience
									name={expeItem.name}
									image={expeItem.image}
									link={expeItem.link}
								/>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default MainExperience;
