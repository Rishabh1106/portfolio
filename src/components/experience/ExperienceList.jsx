import { useState } from "react";
import "./ExperienceList.css"; // Import the styles
import "./styles/experience.css"
import ExperienceModal from "./ExperienceModal";
import ExperienceCard from "./ExperienceCard"

const experiences = [
  {
    company: "HyperVerge Inc. (Bangalore, India)",
    role: "Software Engineer (Jul 2022 – Present)",
    logo: "/logos/hyperverge.png",
	  stack: "Python, JavaScript, TypeScript, Nodejs, FastAPI, ReactJS, Redux-toolkit",
	  stack1: "PostgreSQL, MongoDB, AWS, Google Cloud Platform",
	  stack2: "Git, Gitlab CI/CD, Packer, Ansible, Docker, Terraform",
    details: [
      "Maintained high-availability AI services with 3M+ daily API calls.",
      "Developed CKYC service with 100% regulatory compliance.",
      "Designed and built AI-driven quality check API from scratch, a critical service ensuring accurate document classification and processing reliability across KYC workflows.",
      "Built Slack automation, Lambda tools, Metabase insights.",
      "Engineered plug-and-play On-Prem deployment pipelines.",
      "Maintained secure DigiLocker API for identity verification, processing 1M+ transactions/month."
    ]
  },
  {
    company: "HyperVerge Inc. (Bangalore, India)",
    role: "Software Engineer Intern (Jan 2022 – Jun 2022)",
    logo: "/logos/hyperverge.png",
    stack: "Python, JavaScript, TypeScript, Nodejs, FastAPI",
	  stack1: "PostgreSQL, MongoDB, AWS, Google Cloud Platform",
	  stack2: "Git, Gitlab CI/CD, Packer, Ansible, Docker, Terraform",
    details: [
      "Contributed to the development and maintenance of face recognition service, ensuring new feature delivery and high availability.",
      "Gained hands-on experience in Docker-based service deployment for scalable environments.",
      "Acquired proficiency in managing AWS infrastructure via console and Terraform."
    ]
  },
  {
    company: "Orbitshifters (Remote)",
    role: "Software Engineer Intern (July 2020 – Aug 2020)",
    logo: "/logos/expidense.png",
    stack: "NodeJS, ExpressJS, AngularJS, MongoDB",
    details: [
      "Worked on NodeJS, ExpressJS, AngularJS, MongoDB.",
      "Built and contributed core web app components for multiple projects in company.",
      "Built E2E test pipelines on github"
    ]
  },
  {
    company: "Expidense (Remote)",
    role: "Software Engineer Intern (Apr 2020 – Jun 2020)",
    logo: "/logos/expidense.png",
	  stack: "NodeJS, ExpressJS, AngularJS, MongoDB",
    details: [
      "Worked on NodeJS, ExpressJS, AngularJS, MongoDB.",
      "Contributed to Employees Management System (EMS) with team of recognised engineers",
      "Deployed industry level web application on AWS"
    ]
  },
];

const ExperienceList = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="all-experiences-container">
        {experiences.map((exp, index) => (
          <div className="all-experiences-project"
            onClick={() => setSelected(exp)}
          >
			<ExperienceCard
				company={exp.company}
				role={exp.role}
				stack={exp.stack}
				stack1={exp.stack1 || ""}
				stack2={exp.stack2 || ""}
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

export default ExperienceList;
