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
				{/* // HOME PAGE */}
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
				{/* // ABOUT ME */}
				<div class="row">
					<div class="col-lg-1"></div>
					<div class="col-lg-6">
						<h1 className="title-font">
							About Me
							<br />
						</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
							<br></br>
							Ut enim ad minim veniam, quis nostrud exercitation
							ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla
							pariatur.
							<br></br>
							Excepteur sint occaecat cupidatat non proident, sunt
							in culpa qui officia deserunt mollit anim id est
							laborum.
						</p>
					</div>
					<div class="col-lg-4">
						<img
							className="headshot"
							src={Headshot}
							alt="Taryn Wou Headshot"
						/>
					</div>
					<div class="col-lg-1"></div>
				</div>
				<div class="row">
					<p className="next-sect-link">check out my work</p>
				</div>
				<div class="row">
					<img className="arrow" src={Arrow} alt="Down Arrow" />
				</div>
			</div>
		</div>
	);
}

export default IndexPage;
