import * as React from "react";
import Logo from "../images/tw-logo-1.png";
import "bootstrap/dist/css/bootstrap.css";
import "../images/images.css";

function Navigation() {
	return (
		// header
		<div class="container-fluid">
			{/* // span over row */}
			<div class="row align-items-center">
				{/* //image */}
				<div class="col-lg-6">
					<img className="logo" src={Logo} alt="Taryn Wou Logo" />
				</div>
				{/* //navlinks */}
				<div class="col-lg-6">
					{/* //About */}
					<div className="navlink">
						<a href="">About</a>
					</div>
					{/* //Portfolio */}
					<div className="navlink">
						<a href="">Portfolio</a>
					</div>
					{/* //Experience */}
					<div className="navlink">
						<a href="">Experience</a>
					</div>
					{/* //Resume */}
					<div className="navlink">
						<a href="">Resume</a>
					</div>
					{/* //Contact */}
					<div className="navlink" id="contact-button">
						<a href="mailto:tarynwou@gmail.com">Contact</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
