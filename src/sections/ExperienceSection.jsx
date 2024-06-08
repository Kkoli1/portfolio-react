import "../App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedLine from "../components/AnimatedLine";
import ExperienceItem from "../components/ExperienceItem";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const onbExpSE = {
  roleTitle: "Software Engineer",
  dateRange: "aug 2023 - present",
  companyLogo: "assets/onb-logo.png",
  companyName: "Orange and Bronze Software Labs",
  inner: [
    {
      innerRole: "Fullstack Developer",
      innerClient: "Finance Institution, AUS",
      innerTasks: [
        "Implemented integration of HubSpot CRM service into the website utilizing HubSpot/'s developers API endpoints. This integration allows for the utilization of HubSpot's Contact tool to store clients' information and their responses directly within the website.",
        "Engaged in full-stack development tasks.",
        "Utilized Git and Docker for effective version control and Continuous Integration/Continuous Deployment (CI/CD) processes.",
        "Utilized Liquibase for Database Migration",
        "Contributed frontend enhancements by implementing modernized components for the CSV Export feature, tailored specifically for administrators.",
        "Performed bug fixes in both the Development (Dev) and User Acceptance Testing (UAT) environments.",
        "Frontend and Backend code cleanup (refactoring)",
      ],
      tech: [
        "SpringBoot",
        "ReactJS",
        "GitLab",
        "Docker",
        "PostgreSQL",
        "Liquibase",
        "AWS",
      ],
    },
    {
      innerRole: "MongoDB Instructor",
      innerClient: "Finance Institution, PH",
      innerTasks: [
        "Prepared comprehensive resources and presentations tailored for MongoDB training sessions within the finance institution.",
        "Developed engaging activities and crafted challenging code problems to facilitate hands-on learning experiences for trainees.",
        "Delivered in-depth MongoDB training sessions to newly hired personnel of our client, ensuring thorough understanding and proficiency in database management.",
        "Adapted training materials to suit the specific needs and objectives of the finance institution, enhancing the relevance and applicability of the content for participants.",
      ],
      tech: ["MongoDB", "VSCode", "CanvasLMS"],
    },
  ],
};

const onbExpIntern = {
  roleTitle: "Software Engineer Intern",
  dateRange: "apr 2023 - jul 2023",
  companyLogo: "assets/onb-logo.png",
  companyName: "Orange and Bronze Software Labs",
  inner: [
    {
      innerRole: "Software Engineer Trainee",
      innerClient: "Internal",
      innerTasks: [
        "Received training from seasoned Software Engineer professionals, guiding my transition from an intern to a proficient professional. Acquired best practices and cultivated the proper mindset for effective problem-solving.",
        "Complete a learning journey from Git Basics to Docker, Java Professionals Courses covering Spring Boot and Best Practices, ReactJS, Cypress Testing, and Agile Methodology Training.",
      ],
      tech: [
        "Linux",
        "Java - SpringBoot",
        "ReactJS",
        "Git",
        "Docker",
        "PostgreSQL",
        "Cypress",
      ],
    },
  ],
};

const feuExpCSSE = {
  roleTitle: "BSCSSE",
  dateRange: "2019 - 2024",
  companyLogo: "assets/feutech-logo.png",
  companyName: "FEU Institute of Technology",
  inner: [
    {
      innerRole:
        "BS Computer Science with Specialization in Software Engineering",
      innerClient: "Cum Laude",
      innerTasks: [
        "Awarded Cum Laude upon graduation in February 2024.",
        "Created Meshr App, a multimodal app utilizing stable diffusion technology to generate various AI-generated images tailored to user preferences, as part of the thesis project.",
        "Won Best in Thesis on Artificial Intelligence Batch for Meshr App project.",
        "Awarded Best Innovative Project for Meshr App project.",
        "Represented FEU TECH in a competition with Meshr App, showcasing its innovation and utility.",
        "Engaged in coursework covering fundamental computer science principles, algorithms, and data structures.",
        "Collaborated with peers on various software development projects, gaining experience in project management and version control with tools like Git.",
      ],
      tech: [],
    },
  ],
};

const exps = [onbExpSE, onbExpIntern, feuExpCSSE];

export default function Experience() {
  useEffect(() => {
    const letters = gsap.utils.toArray(".exp-letter");
    letters.forEach((letter) => {
      gsap.to(letter, {
        scrollTrigger: {
          trigger: "#experience-section",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
        opacity: 1,
        y: -600 * letter.dataset.speed,
        ease: "power4.out",
      });
    });
  }, []);
  return (
    <div id="experience-section">
      <div className="experience-section-wrapper">
        <div className="experience-main-title-wrapper">
          <span className="exp-letter" data-speed="0.2">
            E
          </span>
          <span className="exp-letter" data-speed="0.1">
            X
          </span>
          <span className="exp-letter" data-speed="0.3">
            P
          </span>
        </div>
        <div className="experience-section-timeline-container">
          <AnimatedLine />
          {exps.map((expsObj, idx) => (
            <React.Fragment key={idx}>
              <ExperienceItem key={idx} expsObj={expsObj} />
              {idx !== exps.length - 1 && <AnimatedLine />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
