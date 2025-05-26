import React from "react";
import "./styles/experience.css";

const ExperienceCard = ({ company, role, stack, stack1, stack2 }) => {
	return (
		<div className="experience-card">
			<div className="experience-card-content">
				<h3 className="experience-title">{company}</h3>
				<h3 className="experience-role">{role}</h3>
				<li className="experience-stack">{stack}</li>
				{stack1 && <li className="experience-stack">{stack1}</li>}
				{stack2 && <li className="experience-stack">{stack2}</li>}
			</div>
		</div>
	);
};


export default ExperienceCard;
