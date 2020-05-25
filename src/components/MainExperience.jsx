import React from "react";
import Experience from "./Experience.jsx";

class MainExperience extends React.Component {
	render() {
		const expeList = [
			{
				name: "E-Bus",
				image: "/assets/E-Bus1.jpg",
				desc: "Ebus isadddddddddddddd fdsfsdf gfgds gfgegd sdafsdfa",
			},
			{
				name: "Sass",
				image: "/assets/Duitku.jpg",
				desc: "Ebus isadddddddddddddd fdsfsdf gfgds gfgegd sdafsdfa",
			},
			{
				name: "JavaScript",
				image:
					"https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg",
				desc: "Ebus isadddddddddddddd fdsfsdf gfgds gfgegd sdafsdfa",
			},
			{
				name: "React",
				image:
					"https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg",
				desc: "Ebus isadddddddddddddd fdsfsdf gfgds gfgegd sdafsdfa",
			},
		];

		return (
			<div className="mainExperience">
				<h1 className="text-center">My Experience</h1>
				<div className="experience-item">
					{expeList.map((expeItem) => {
						return (
							<Experience
								name={expeItem.name}
								image={expeItem.image}
								desc={expeItem.desc}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default MainExperience;
