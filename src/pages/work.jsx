import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";
import ExperienceList from "../components/experience/ExperienceList";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/work.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Experience | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="work" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							My Dev Logs: Real Work, Real Impact!
						</div>

						<div className="subtitle projects-subtitle">
							Over the past 3.5 years, I’ve worked on a wide range of backend systems, production APIs, and cloud-based services — from building AI-powered identity verification tools to engineering infrastructure that handles millions of secure API calls each month. Many of the projects I’ve contributed to are used in real-world financial and KYC workflows, and I’ve enjoyed the challenge of making them scalable, reliable, and compliant. Whether it’s designing a fresh API from scratch, automating Slack alerts, or deploying Docker containers like puzzle pieces in the cloud, I’ve learned a lot by doing — and breaking — things. I take pride in writing clean, maintainable code and collaborating across teams to ship features that matter. If you're curious about the kind of work I've done or want to discuss systems design, backend magic, or just geek out over infra tools, I’m always up for a chat.
						</div>
						<div>
							<ExperienceList />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
