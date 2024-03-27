import "../App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedLine from "../components/AnimatedLine";
import ExperienceItem from "../components/ExperienceItem";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  return (
    <div id="experience-section">
      <div className="experience-section-wrapper">
        <div className="experience-main-title-wrapper">EXP</div>
        <div className="experience-section-timeline-container">
          <AnimatedLine />
          <ExperienceItem />
        </div>
      </div>
    </div>
  );
}
