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
					{/* <div class="col-lg-1"></div> */}
					<div class="col-lg-8">
						<h1 className="title-font" id="title-about-me">
							About Me
							<br />
						</h1>
						<p id="about-me-blurb">
							Hi there! My name is Taryn, and as a lifelong
							learner, I have always tried to put myself in
							situations that allow me to meet new people and grow
							as an individual. Currently, I am interested in
							pursuing front-end development and UI/UX. Though, I
							am an explorer of many interests, including social
							entrepreneurship, marketing, digital media,
							psychology, and education.
							<br></br>
							<br></br>
							Service is a large part of my everyday being, and I
							hope to drive value back into the communities that
							have touched my life. I would like to think all of
							the activities I partake in, be it work or
							extracurricular-related, have a positive impact on
							the community in one way or another. At my core, I
							am extremely passionate about making education and
							personal development opportunities more accessible,
							especially to underserved demographics.
							<br></br>
							<br></br>
							In my spare time, you may find me playing board
							games with friends, listening to a random (but
							informative) podcast, or chowing down on a bowl of
							poké. I am an extroverted introvert who draws energy
							from constantly being around others but also stays
							up late to be alone with their thoughts. All in all,
							I am curious about new experiences and welcome
							anyone who wants to chat!
						</p>
					</div>
					<div class="col-lg-4">
						<img
							className="headshot-2"
							src={Headshot}
							alt="Taryn Wou Headshot"
						/>
					</div>
					{/* <div class="col-lg-1"></div> */}
				</div>
				<div class="row">
					<p className="next-sect-link">check out my work</p>
				</div>
				<div class="row">
					<img className="arrow" src={Arrow} alt="Down Arrow" />
				</div>
				<div class="row align-items-center">
					<h1 className="title-font" id="title-portfolio">
						Portfolio
					</h1>
				</div>
				<div class="row">
					<div class="col-lg-3"></div>
					<div class="col-lg-6">
						<ul className="portfolio-links">
							{/* //Websites */}
							<li className="portfolio-navitem">
								<a className="navlink" href="">
									Websites
								</a>
							</li>
							{/* //Applications */}
							<li className="portfolio-navitem">
								<a className="navlink" href="">
									Applications
								</a>
							</li>
							{/* //Graphics */}
							<li className="portfolio-navitem">
								<a className="navlink" href="">
									Graphics
								</a>
							</li>
							{/* //Photos */}
							<li className="portfolio-navitem">
								<a className="navlink" href="">
									Photos
								</a>
							</li>
						</ul>
					</div>
					<div class="col-lg-3"></div>
				</div>
			</div>
		</div>
	);
}

export default IndexPage;
