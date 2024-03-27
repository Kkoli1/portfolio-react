import "../App.css";
import gsap from "gsap";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-main-content",
        pin: true,
        start: "center center",
        end: "bottom -500",
        scrub: 1,
      },
    });

    const path = document.querySelector(".line-svg path");
    const length = path.getTotalLength();

    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    timeline
      .fromTo(
        ".main-letter",
        {
          y: 500,
          opacity: 0,
        },
        {
          y: 0,
          duration: 2.5,
          opacity: 1,
          ease: "power2.inOut",
          stagger: 0.8,
        }
      )
      .to(".line", {
        width: "100%",
        duration: 2.5,
        ease: "power2.inOut",
      })
      .fromTo(
        ".desc",
        {
          zIndex: 0,
          y: "-110%",
        },
        {
          y: 0,
          duration: 2.5,
          ease: "power2.inOut",
        }
      )
      .to(path, {
        strokeDashoffset: 0,
        duration: 10,
        ease: "power2.inOut",
      });

    return () => {
      timeline.kill();
    };
  }, []);
  return (
    <>
      <div id="hero-wrapper">
        <div className="hero-main-content">
          <div className="test">
            <h2>
              <div className="main-letter-container">
                <div className="main-letter">h</div>
                <div className="main-letter">i</div>
                <div className="main-letter">,</div>
                <div className="letter-spacer"></div>
                <div className="main-letter">i</div>
                <div className="main-letter">&apos;</div>
                <div className="main-letter">m</div>
                <div className="letter-spacer"></div>
                <div className="main-letter name">a</div>
                <div className="main-letter name">k</div>
                <div className="main-letter name">i</div>
                <div className="main-letter name">o</div>
                <div className="letter-spacer"></div>
                <div className="main-letter name">a</div>
                <div className="main-letter name">l</div>
                <div className="main-letter name">l</div>
                <div className="main-letter name">e</div>
                <div className="main-letter name">n</div>
              </div>
            </h2>
          </div>
          <div className="line"></div>
          <div className="desc">
            <h2>a software engineer</h2>
          </div>
          <svg
            className="line-svg"
            width="165"
            height="935"
            viewBox="0 0 165 935"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffe3" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              d="M79.9794 2C84.5535 9.11398 85.0663 21.0464 87.074 29.3093C94.4405 59.6272 101.941 89.5593 105.254 120.961C110.547 171.123 105.724 218.236 84.7683 262.68C72.0038 289.752 59.7469 313.769 55.3259 344.711C51.8686 368.908 48.6291 400.923 58.8731 423.433C67.287 441.92 81.5502 454.181 94.9667 467.397C110.189 482.391 122.897 501.905 130.706 523.36C134.144 532.808 137.956 544.12 137.445 554.6C136.427 575.507 116.699 585.604 102.505 592.151C73.3612 605.59 40.3185 617.786 17.7247 644.39C9.96969 653.521 3.64429 664.071 2.11667 677.078C0.518567 690.687 15.72 695.628 24.2872 699.319C49.6568 710.25 77.2562 714.967 104.012 718.56C120.453 720.767 140.524 718.551 155.891 727.146C159.91 729.393 163.246 732.859 162.986 738.318C162.204 754.732 145.566 761.072 134.253 764.282C112.005 770.595 88.6095 772.248 65.7903 772.765C60.5871 772.882 55.3858 772.868 50.1823 772.868C46.6921 772.868 57.1683 772.949 60.6468 773.282C67.2405 773.912 84.9871 773.99 88.8476 782.178C92.2998 789.499 82.3263 807.523 80.2455 814.349C78.5045 820.061 76.8662 827.305 80.8663 832.245C83.5379 835.545 85.6577 836.314 84.0588 841.141C82.3226 846.383 79.869 851.274 79.9794 857.072C80.083 862.507 83.172 866.444 83.172 871.968C83.172 893.182 86.1853 912.717 91.1534 933"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
