import * as React from "react";
import Logo from "../images/tw-logo-1.png";
import "bootstrap/dist/css/bootstrap.css";
import "../images/images.css";
import "../components/components.css";

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
					<ul className="navbar-links">
						{/* //Contact */}
						<li className="navitem" id="contact-button">
							<a
								className="navlink"
								href="mailto:tarynwou@gmail.com"
							>
								Contact
							</a>
						</li>
						{/* //Resume */}
						<li className="navitem">
							<a className="navlink" href="">
								Resume
							</a>
						</li>
						{/* //Experience */}
						<li className="navitem">
							<a className="navlink" href="">
								Experience
							</a>
						</li>
						{/* //Portfolio */}
						<li className="navitem">
							<a className="navlink" href="">
								Portfolio
							</a>
						</li>
						{/* //About */}
						<li className="navitem">
							<a className="navlink" href="">
								About
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
