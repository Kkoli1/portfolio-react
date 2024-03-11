import "../App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  return (
    <div id="experience-section">
      <div className="experience-section-wrapper">
        <div className="experience-main-title-wrapper">
          <h1>EXP</h1>
        </div>
      </div>
    </div>
  );
}
