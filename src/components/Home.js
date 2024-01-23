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
            <h2>VISION</h2>
            <p className="vm-heading">
              &quot; Empowering Minds, Igniting Innovation &quot;
            </p>
            <p>
              <br />
              <br />
              Ciphers Club, recognized as the top tech community, envisions a
              future where minds are empowered through the language of code,
              fostering innovation, collaboration, and limitless possibilities.
            </p>
          </div>
          <div className="about-section vision-mission">
            <h2>MISSION</h2>
            <p className="vm-heading">
              &quot; Charting the Future of Tech Excellence &quot;
            </p>
            <p>
              <br />
              <br />
              Our mission is to provide the best dynamic platform where students
              explore, learn, and innovate in the realms of coding, technology,
              and entrepreneurship. Through a commitment to excellence,
              collaboration, continuous learning, and the development of
              essential soft skills, we aim to shape visionary leaders who will
              redefine the landscape of technology.
            </p>
          </div>
          <div className="about-section vision-mission">
            <h2>OBJECTIVES</h2>
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
            {/* <div>
              <div className="cards">
                <img src="hod-card.png" alt="card-pfp"></img>
                <p className="name">Dr. S. V. Athawle</p>
                <p className="designation">HOD</p>
              </div>
            </div> 
            <div>
              <div className="cards">
                <div className="card-content">
                  <img
                    src="staff-card.png"
                    alt="card-pfp"
                    className="card-pfp"
                  ></img>
                  <p className="name">Vipul S. Gunjal</p>
                  <p className="designation">Staff</p>
                </div>
              </div>
              <div className="cards">
                <div className="card-content">
                  <img
                    src="staff-card.png"
                    alt="card-pfp"
                    className="card-pfp"
                  ></img>
                  <p className="name">XYZ</p>
                  <p className="designation">Staff</p>
                </div>
              </div>
            </div>*/}
            <div className="leadership-team">
              <div className="cards">
                <div className="card-content">
                  <img
                    src="students-card.png"
                    alt="card-pfp"
                    className="card-pfp"
                  ></img>
                  <p className="name">Aryan Chouksey</p>
                  <p className="designation">students co-lead</p>
                </div>
              </div>
              <div className="cards">
                <div className="card-content">
                  <img
                    src="students-card.png"
                    alt="card-pfp"
                    className="card-pfp"
                  ></img>
                  <p className="name">Aryan Choudhary</p>
                  <p className="designation">students co-lead</p>
                </div>
              </div>
              <div className="cards">
                <div className="card-content">
                  <img
                    src="students-card.png"
                    alt="card-pfp"
                    className="card-pfp"
                  ></img>
                  <p className="name">Aniket Dhakane</p>
                  <p className="designation">students co-lead</p>
                </div>
              </div>
              <div className="cards">
                <div className="card-content">
                  <img
                    src="students-card.png"
                    alt="card-pfp"
                    className="card-pfp"
                  ></img>
                  <p className="name">Aditya Mahale</p>
                  <p className="designation">students co-lead</p>
                </div>
              </div>
              <div className="cards">
                <div className="card-content">
                  <img
                    src="students-card.png"
                    alt="card-pfp"
                    className="card-pfp"
                  ></img>
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
