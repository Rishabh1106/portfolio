import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Code, curiosity, and a little ambition — here’s what I’ve built along the way!
						</div>

						<div className="subtitle projects-subtitle">
							I've worked on a variety of projects over the years and take pride in the progress I've made along the way. Many of these are open-source and available for anyone to explore, learn from, or contribute to. If you’re interested in what I’ve built, feel free to dive into the code — feedback, suggestions, or pull requests are always welcome. I believe collaboration is one of the best ways to grow as a developer, and I'm always excited to connect with others who are passionate about building great software.
						</div>	
						<div className="subtitle projects-subtitle">
						Some of my personal highlights include Rentzzy, a property rental web app built with the MERN stack featuring location and budget-based filtering; a COVID-19 diagnosis system using deep learning to analyze X-ray images and cough audio inputs; and a lightweight Todo app built with React and Redux to demonstrate clean state management and component design. These projects reflect my curiosity and passion for experimenting with new tech and building tools that are both functional and fun to create.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					{/* <div className="page-footer">
						<Footer />
					</div> */}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
