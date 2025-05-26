import React from "react";
import "./ExperienceModal.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const ExperienceModal = ({ isOpen, experience, onClose }) => {
  if (!isOpen || !experience) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        {/* <img
          src={experience.logo}
          alt={`${experience.company} logo`}
          className="modal-logo"
        /> */}
        <h2>{experience.company}</h2>
        <p className="modal-role">{experience.role}</p>

        <ul className="details-list">
          {experience.details.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        { experience.link &&
        <Link to={experience.link}>
            <div className="project-link">
              <div className="project-link-icon">
                <FontAwesomeIcon icon={faLink} />
              </div>
              <div className="project-link-text">{experience.linkText}</div>
            </div>
        </Link>
      }
      </div>
    </div>
  );
};

export default ExperienceModal;
