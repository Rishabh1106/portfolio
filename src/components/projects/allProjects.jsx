import { useState }  from "react";
import Project from "./project";
import INFO from "../../data/user";
import "./styles/allProjects.css";
import ExperienceModal from "../experience/ExperienceModal";

const AllProjects = () => {
	const [selected, setSelected] = useState(null);
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index} 
					onClick={() => setSelected({company: project.title, details: project.details, linkText: project.linkText || "", link: project.link || ""})}
					>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.stack}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
			<ExperienceModal
			isOpen={!!selected}
			experience={selected}
			onClose={() => setSelected(null)}
		/>
		</div>
	);
};

export default AllProjects;
