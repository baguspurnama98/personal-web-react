import React from "react";
import vec1 from "../assets/vector5.svg";
import vec2 from "../assets/vector6.svg";
import vec3 from "../assets/vector7.svg";
import vec4 from "../assets/vector8.svg";
import vec5 from "../assets/vector9.svg";
class Experience extends React.Component {
	render() {
		return (
			<div className="Hobby">
				<h1 className="title text-center">Things That Interest Me</h1>
				<div className="container">
					<div className="row">
						<div class="col text-right">
							<img src={vec5} />
						</div>
						<div class="col textHobby">
							<h4>Blogging</h4>
							<p>
								Lately I like to share experiences and knowledge on the{" "}
								<b>Medium</b>. In my blog I prefer to share tutorials related to
								the world of programming, for more details you can read directly
								my blog
								<a href="https://medium.com/@baguspurnama">
									<b> here</b>
								</a>
								.
								<br />
								<br />
								Apart from that I also like contributing to the assessment of a
								location on google maps, I just want to help others in finding
								references to their destination.
							</p>
						</div>
						<div class="w-100"></div>
						<div class="col text-right textHobby">
							<h4>Content Creator</h4>
							<p>
								I am also interested in sharing your knowledge through visual
								media, such as <b>Youtube</b>. I have a YouTube channel called
								<a href="https://www.youtube.com/channel/UCqu9MkfLR0FWv6qhClTmeAA">
									<b> CodeGlider</b>
								</a>
								.
								<br />
								<br />
								Although the number of subcriber is only around 20, but I am
								quite happy that my video is appreciated by others. I usually
								make a new video during my vacation to fill my free time.
							</p>
						</div>
						<div class="col">
							<img src={vec1} />
						</div>
						<div class="w-100"></div>
						<div class="col text-right">
							<img src={vec4} />
						</div>
						<div class="col textHobby">
							<h4>Photography</h4>
							<p>
								I loved to photography, even I also had participated in a
								photography community when I was in college. With photo we can
								tell stories in many different languages and perspectives. Even
								with photos we can share our feelings. <br />
								<br />
								But one thing there is a myth that I believe, when we are
								photographing, the results are always good, but when our friends
								are photographing, why is the result always bad?
								<br />
								<br />
								If you want to see my work, you can see it on my Instagram{" "}
								<a href="https://www.instagram.com/baguspurnama/">
									<b> here</b>
								</a>
								.
							</p>
						</div>
						<div class="w-100"></div>
						<div class="col text-right textHobby">
							<h4>Game Computer</h4>
							<p>
								I like playing games, almost all platform games I like. I prefer
								to play games rather than lazing on the bed. I like sports,
								simulation and action games.
								<br />
								<br />
								The games that I often play lately are <b>PES 2020</b> and
								<b> GTA V </b>
								Online. Contact me if you want to play together
							</p>
						</div>
						<div class="col">
							<img src={vec2} />
						</div>
						<div class="w-100"></div>
						<div class="col text-right">
							<img src={vec3} />
						</div>
						<div class="col textHobby">
							<h4>Football</h4>
							<p>
								Football is one of my favorite sports. I do not feel good at
								playing football because I am indeed bad, but I really enjoy
								watching football. My favorite club is{" "}
								<b>Real Madrid #HalaMadrid</b>.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Experience;
