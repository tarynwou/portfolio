import * as React from "react";
import Navigation from "../components/Navigation";
import Logo from "../images/tw-logo-1.png";
import Headshot from "../images/Headshot.png";
import Arrow from "../images/down-arrow.png";
import "bootstrap/dist/css/bootstrap.css";
import "../images/images.css";
import "../pages/pages.css";

// const IndexPage = () => {
function IndexPage() {
	return (
		<div className="page-style">
			{/* <title>Taryn Wou</title> */}
			<div class="container">
				<div class="row">
					<Navigation></Navigation>
				</div>
				<br></br>
				<br></br>
				<br></br>
				<div class="row">
					<div class="col-lg-4">
						<img
							className="headshot"
							src={Headshot}
							alt="Taryn Wou Headshot"
						/>
					</div>
					<div class="col-lg-8">
						<p id="title-hi">Hi, my name is</p>
						<h1 className="title-font">
							Taryn Wou.
							<br />
						</h1>
						<h1 className="title-font" id="title-dev">
							I am a developer.
						</h1>
						<p className="title-about">
							As a business and computer science student at the
							University of British Columbia, I am actively
							looking for opportunities to develop my technical
							abilities and drive value back into the community.
						</p>
					</div>
				</div>
				<div class="row">
					<p className="next-sect-link">more about me</p>
				</div>
				<div class="row">
					<img className="arrow" src={Arrow} alt="Down Arrow" />
				</div>
			</div>
		</div>
		// </main>
	);
}

export default IndexPage;
