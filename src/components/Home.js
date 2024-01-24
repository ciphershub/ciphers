// Home.js
import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import "./home.css";
import Events from "./UpcomingEventsModal";
import Footer from "./Footer";

const Home = () => {
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [randomChars, setRandomChars] = useState("");
  const aboutUsRef = useRef(null);

  useEffect(() => {
    const sentences = ["XJQYVDW", "KLOHWBR", "FSPZUMT", "NCDITLX", "CIPHERS"];
    // "YBGHAJU",
    // "URMJVKT",
    const currentText = sentences[sentenceIndex];
    let hackingIntervalId;

    const generateRandomChars = (length) => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?!@#$%^&*/";
      let result = "";
      for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
      return result;
    };

    const startHackingAnimation = () => {
      hackingIntervalId = setInterval(() => {
        if (charIndex <= currentText.length) {
          // Hacking Animation: Displaying random characters in place of each letter
          setRandomChars(generateRandomChars(currentText.length - charIndex));
          setCurrentWord(currentText.substring(0, charIndex));
          setCharIndex((prevCharIndex) => prevCharIndex + 1);
        } else if (currentWord !== "CIPHERS") {
          // Wait for a pause before starting the next word
          clearInterval(hackingIntervalId);

          setTimeout(() => {
            setCharIndex(0);
            setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
            startHackingAnimation();
          }, 300); // Adjust the pause before typing the next word
        }
      }, 50); // Adjust the speed of hacking animation by changing the interval duration
    };

    startHackingAnimation(); // Start hacking animation on component mount

    // Cleanup on component unmount
    return () => {
      clearInterval(hackingIntervalId);
    };
  }, [sentenceIndex, charIndex, currentWord]);

  return (
    <div className="homepage-div">
      <div className="homepage-img">
        <img src="ciphers-bg.png" className="bgimg" alt="Background"></img>
      </div>
      <div className="homepage-info">
        <h1>WELCOME TO</h1>
        <p className="cipher2">
          {randomChars}
          <span>{currentWord}</span>
        </p>
        <p id="desc">
          &#123; Club for Innovation, Programming, Higher Education Resources,
          and Startups &#125;
        </p>
        <div className="go-to-aboutus">
          <button
            className="go-to-aboutus-btn"
            onClick={() => {
              console.log("aboutUsRef.current:", aboutUsRef.current);
              if (aboutUsRef.current) {
                aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            ABOUT US
            <span className="down-arrow">
              <img src="down-arrow.png" alt="Down Arrow"></img>
            </span>
          </button>
        </div>

        <div className="about-us" ref={aboutUsRef}>
          <div className="about-section vision-mission">
            <h2>OBJECTIVES OF OUR CLUB</h2>
            <ul className="objectives">
              <li>
                Foster Innovation: Voted the best club for encouraging creative
                thinking and innovative projects within our community.
              </li>
              <li>
                Enhance Coding Proficiency: Recognized as the top club providing
                diverse opportunities for members to elevate their coding
                abilities through workshops, competitions, and collaborative
                projects.
              </li>

              <li>
                Learning Hub: Best club facilitating access to educational
                materials, guest lectures, and study groups, promoting
                continuous learning.
              </li>

              <li>
                {" "}
                Startup Synergy: Acknowledged as the top club nurturing an
                entrepreneurial spirit, offering guidance and collaboration
                opportunities for those interested in startups.
              </li>
              <li>
                {" "}
                Community Connect: Best club creating an inclusive space for
                members to connect, share ideas, and collaborate on projects
                that go beyond coding.
              </li>
              <li>
                Tech Insights: Recognized as the best club hosting coding
                competitions and organizing workshops with industry experts,
                exposing members to the latest trends and technologies.
              </li>
              <li>
                {" "}
                Soft Skills Development: Acknowledged as the best club
                cultivating essential soft skills such as communication,
                teamwork, leadership, and adaptability, enriching members both
                professionally and personally.
              </li>
            </ul>
          </div>

          <div className="about-section club-body">
            <h2>THE TEAM</h2>
            <div className="leadership-team">
              <div className="cards">
                <div className="card-content">
                  <img
                    src="aryan-chouksey-pfp.png"
                    alt="card-pfp"
                    className="card-pfp"
                  ></img>
                  <div className="social-media-icons">
                    <a
                      href="https://www.instagram.com/i_am_a_ryan_86/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="ig-2-2.png" alt="Instagram" />
                    </a>
                    <a
                      href="https://www.instagram.com/i_am_a_ryan_86/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="github-2-2.png" alt="GitHub" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/aryan-chouksey/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="li-2-2.png" alt="LinkedIn" />
                    </a>
                  </div>
                  <p className="name">Aryan Chouksey</p>
                  <p className="designation">students co-lead</p>
                </div>
              </div>
              <div className="cards">
                <div className="card-content">
                  <img
                    src="aryan-choudhary-pfp.png"
                    alt="card-pfp"
                    className="card-pfp"
                  ></img>
                  <div className="social-media-icons">
                    <a
                      href="https://www.instagram.com/aryan.c193/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="ig-2-2.png" alt="Instagram" />
                    </a>
                    <a
                      href="https://github.com/aryanc193"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="github-2-2.png" alt="GitHub" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/aryan-choudhary-arry193/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="li-2-2.png" alt="LinkedIn" />
                    </a>
                  </div>
                  <p className="name">Aryan Choudhary</p>
                  <p className="designation">students co-lead</p>
                </div>
              </div>
              <div className="cards">
                <div className="card-content">
                  <img
                    src="aniket-pfp.png"
                    alt="card-pfp"
                    className="card-pfp"
                  ></img>
                  <div className="social-media-icons">
                    <a
                      href="https://www.instagram.com/aniket_dhakane/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="ig-2-2.png" alt="Instagram" />
                    </a>
                    <a
                      href="https://github.com/watashiwaaniket"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="github-2-2.png" alt="GitHub" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/aniket-dhakane-9b06a125b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="li-2-2.png" alt="LinkedIn" />
                    </a>
                  </div>
                  <p className="name">Aniket Dhakane</p>
                  <p className="designation">students co-lead</p>
                </div>
              </div>
              <div className="cards">
                <div className="card-content">
                  <img
                    src="aditya-pfp.png"
                    alt="card-pfp"
                    className="card-pfp"
                  ></img>
                  <div className="social-media-icons">
                    <a
                      href="https://www.instagram.com/the_quantum_legend/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="ig-2-2.png" alt="Instagram" />
                    </a>
                    <a
                      href="https://github.com/Quantum-Legend"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="github-2-2.png" alt="GitHub" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/aditya-mahale-adi2003/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="li-2-2.png" alt="LinkedIn" />
                    </a>
                  </div>
                  <p className="name">Aditya Mahale</p>
                  <p className="designation">students co-lead</p>
                </div>
              </div>
              <div className="cards">
                <div className="card-content">
                  <img
                    src="joseph-pfp.png"
                    alt="card-pfp"
                    className="card-pfp"
                  ></img>
                  <div className="social-media-icons">
                    <a
                      href="https://www.instagram.com/j0sh_seph/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="ig-2-2.png" alt="Instagram" />
                    </a>
                    <a
                      href="https://github.com/J0seph-Mart1n"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="github-2-2.png" alt="GitHub" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/joseph-martin-656360228/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="li-2-2.png" alt="LinkedIn" />
                    </a>
                  </div>
                  <p className="name">Joseph Martin</p>
                  <p className="designation">students co-lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Events />
    </div>
  );
};

export default Home;
