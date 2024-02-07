// Home.js
import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import "./home.css";
import Footer from "./Footer";
import UpcomingEventsModal from "./UpcomingEventsModal";
import AccordionItem from "./AccordionItem";

const Card = ({ name, image, socialLinks, designation }) => {
  return (
    <div className="cards">
      <div className="card-content">
        <img src={image} alt={`card-pfp-${name}`} className="card-pfp" />
        <div className="social-media-icons">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.icon} alt={link.name} />
            </a>
          ))}
        </div>
        <p className="name">{name}</p>
        <p className="designation">{designation}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const teamData = [
    {
      name: "Aryan Chouksey",
      image: "aryan-chouksey-pfp.png",
      socialLinks: [
        {
          name: "Instagram",
          icon: "ig-2-2.png",
          url: "https://www.instagram.com/i_am_a_ryan_86/",
        },
        {
          name: "GitHub",
          icon: "github-2-2.png",
          url: "https://www.github.com/i_am_a_ryan_86/",
        },
        {
          name: "LinkedIn",
          icon: "li-2-2.png",
          url: "https://www.linkedin.com/in/aryan-chouksey/",
        },
      ],
      designation: "President",
    },
    {
      name: "Aryan Choudhary",
      image: "aryan-choudhary-pfp.png",
      socialLinks: [
        {
          name: "Instagram",
          icon: "ig-2-2.png",
          url: "https://www.instagram.com/aryan.c193/",
        },
        {
          name: "GitHub",
          icon: "github-2-2.png",
          url: "https://www.github.com/aryanc193/",
        },
        {
          name: "LinkedIn",
          icon: "li-2-2.png",
          url: "https://www.linkedin.com/in/aryan-choudhary-arry193/",
        },
      ],
      designation: "Vice President",
    },
    {
      name: "Aditya Mahale",
      image: "aditya-pfp.png",
      socialLinks: [
        {
          name: "Instagram",
          icon: "ig-2-2.png",
          url: "https://www.instagram.com/the_quantum_legend/",
        },
        {
          name: "GitHub",
          icon: "github-2-2.png",
          url: "https://www.github.com/Quantum-Legend/",
        },
        {
          name: "LinkedIn",
          icon: "li-2-2.png",
          url: "https://www.linkedin.com/in/aditya-mahale-adi2003/",
        },
      ],
      designation: "Secretary",
    },
    {
      name: "Gayatri Kulkarni",
      image: "gayatri-pfp.png",
      socialLinks: [
        {
          name: "Instagram",
          icon: "ig-2-2.png",
          url: "https://www.instagram.com/gayatri_mk26/",
        },
        {
          name: "GitHub",
          icon: "github-2-2.png",
          url: "https://github.com/gayatrimk",
        },
        {
          name: "LinkedIn",
          icon: "li-2-2.png",
          url: "https://www.linkedin.com/in/gayatri-kulkarni-8705a8285/",
        },
      ],
      designation: "Events and Social Media Manager",
    },
    {
      name: "Aniket Dhakane",
      image: "aniket-pfp.png",
      socialLinks: [
        {
          name: "Instagram",
          icon: "ig-2-2.png",
          url: "https://www.instagram.com/aniket_dhakane/",
        },
        {
          name: "GitHub",
          icon: "github-2-2.png",
          url: "https://www.github.com/watashiwaaniket/",
        },
        {
          name: "LinkedIn",
          icon: "li-2-2.png",
          url: "https://www.linkedin.com/in/aniket-dhakane-9b06a125b/",
        },
      ],
      designation: "Management & Social Media co-lead",
    },
    {
      name: "Ojasvin Borawake",
      image: "ojasvin-pfp.png",
      socialLinks: [
        {
          name: "Instagram",
          icon: "ig-2-2.png",
          url: "https://www.instagram.com/ojas._.b/",
        },
        {
          name: "GitHub",
          icon: "github-2-2.png",
          url: "https://www.github.com/Pheonix747hs/",
        },
        {
          name: "LinkedIn",
          icon: "li-2-2.png",
          url: "https://www.linkedin.com/in/ojasvin-borawke-0686b2236/",
        },
      ],
      designation: "management team co-lead",
    },
    {
      name: "Shreya Bhavsar",
      image: "shreya-pfp.png",
      socialLinks: [
        {
          name: "Instagram",
          icon: "ig-2-2.png",
          url: "https://www.instagram.com/_shreyaya___/",
        },
        {
          name: "GitHub",
          icon: "github-2-2.png",
          url: "https://github.com/shreya6286",
        },
        {
          name: "LinkedIn",
          icon: "li-2-2.png",
          url: "https://www.linkedin.com/in/shreya-bhavsar-4427b3147/",
        },
      ],
      designation: "Management Team",
    },

    {
      name: "Sharyu Adsul",
      image: "sharyu-pfp.png",
      socialLinks: [
        {
          name: "Instagram",
          icon: "ig-2-2.png",
          url: "https://www.instagram.com/sharyu__19/",
        },
        {
          name: "GitHub",
          icon: "github-2-2.png",
          url: "https://github.com/Sharyuadsul",
        },
        {
          name: "LinkedIn",
          icon: "li-2-2.png",
          url: "https://www.linkedin.com/in/sharyu-adsul-7716a8232/",
        },
      ],
      designation: "Higher Education Head and Social Media Manager",
    },
    {
      name: "Aparimeya Tiwari",
      image: "aparimeya-pfp.png",
      socialLinks: [
        {
          name: "Instagram",
          icon: "ig-2-2.png",
          url: "https://www.instagram.com/",
        },
        {
          name: "GitHub",
          icon: "github-2-2.png",
          url: "https://www.github.com/",
        },
        {
          name: "LinkedIn",
          icon: "li-2-2.png",
          url: "https://www.linkedin.com/in/aparimeya-tiwari-76a252252/",
        },
      ],
      designation: "Higher Education Co-Head",
    },
    {
      name: "Joseph Martin",
      image: "joseph-pfp.png",
      socialLinks: [
        {
          name: "Instagram",
          icon: "ig-2-2.png",
          url: "https://www.instagram.com/j0sh_seph/",
        },
        {
          name: "GitHub",
          icon: "github-2-2.png",
          url: "https://www.github.com/J0seph-Mart1n/",
        },
        {
          name: "LinkedIn",
          icon: "li-2-2.png",
          url: "https://www.linkedin.com/in/joseph-martin-656360228/",
        },
      ],
      designation: "Founding team and Programming Team Co-head",
    },
    {
      name: "Sanchit Patil",
      image: "sanchit-pfp.png",
      socialLinks: [
        {
          name: "Instagram",
          icon: "ig-2-2.png",
          url: "https://www.instagram.com/#",
        },
        {
          name: "GitHub",
          icon: "github-2-2.png",
          url: "https://www.github.com/#",
        },
        {
          name: "LinkedIn",
          icon: "li-2-2.png",
          url: "https://www.linkedin.com/in/sanchit-patil-888162288/",
        },
      ],
      designation: "Programming Head",
    },
    {
      name: "Pranjal J Patil",
      image: "students-card.png",
      socialLinks: [
        {
          name: "Instagram",
          icon: "ig-2-2.png",
          url: "https://www.instagram.com/#",
        },
        {
          name: "GitHub",
          icon: "github-2-2.png",
          url: "https://www.github.com/#",
        },
        {
          name: "LinkedIn",
          icon: "li-2-2.png",
          url: "https://www.linkedin.com/in/pranjal-patil-322661244/",
        },
      ],
      designation: "Startups Head",
    },
    {
      name: "Arya Kasbe",
      image: "arya-pfp.png",
      socialLinks: [
        {
          name: "Instagram",
          icon: "ig-2-2.png",
          url: "https://www.instagram.com/#",
        },
        {
          name: "GitHub",
          icon: "github-2-2.png",
          url: "https://github.com/adwait-rao",
        },
        {
          name: "LinkedIn",
          icon: "li-2-2.png",
          url: "https://www.linkedin.com/in/aarya-kasbe-87bab3227/",
        },
      ],
      designation: "Innovation Head",
    },
    {
      name: "Adwait Rao",
      image: "adwait-pfp.png",
      socialLinks: [
        {
          name: "Instagram",
          icon: "ig-2-2.png",
          url: "https://www.instagram.com/#",
        },
        {
          name: "GitHub",
          icon: "github-2-2.png",
          url: "https://www.github.com/#",
        },
        {
          name: "LinkedIn",
          icon: "li-2-2.png",
          url: "https://www.linkedin.com/in/adwait-rao-973a57222/",
        },
      ],
      designation: "Innovation Co-Head",
    },
  ];
  const objectives = [
    {
      title: "Foster Innovation",
      description:
        "Voted the best club for encouraging creative thinking and innovative projects within our community.",
    },
    {
      title: "Enhance Coding Proficiency",
      description:
        "Recognized as the top club providing diverse opportunities for members to elevate their coding abilities through workshops, competitions, and collaborative projects.",
    },
    {
      title: "Learning Hub",
      description:
        "Best club facilitating access to educational materials, guest lectures, and study groups, promoting continuous learning.",
    },
    {
      title: "Startup Synergy",
      description:
        "Acknowledged as the top club nurturing an entrepreneurial spirit, offering guidance and collaboration opportunities for those interested in startups.",
    },
    {
      title: "Community Connect",
      description:
        "Best club creating an inclusive space for members to connect, share ideas, and collaborate on projects that go beyond coding.",
    },
    {
      title: "Tech Insights",
      description:
        "Recognized as the best club hosting coding competitions and organizing workshops with industry experts, exposing members to the latest trends and technologies.",
    },
    {
      title: "Soft Skills Development",
      description:
        "Acknowledged as the best club cultivating essential soft skills such as communication, teamwork, leadership, and adaptability, enriching members both professionally and personally.",
    },
  ];

  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [randomChars, setRandomChars] = useState("");
  const aboutUsRef = useRef(null);

  useEffect(() => {
    const sentences = ["XJQYVDW", "KLOHWBR", "FSPZUMT", "CIPHERS"];
    //  "NCDITLX", "FSPZUMT", "YBGHAJU","URMJVKT",
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
        const currentText = sentences[sentenceIndex];

        // Check if the sentenceIndex is within the valid range
        if (currentText) {
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
              // Update the sentenceIndex in a way that ensures it's within the valid range
              setSentenceIndex(
                (prevIndex) => (prevIndex + 1) % sentences.length
              );
              startHackingAnimation();
            }, 100); // Adjust the pause before typing the next word
          }
        } else {
          // Handle the case where the sentenceIndex is out of bounds
          console.error("Invalid sentenceIndex:", sentenceIndex);
          clearInterval(hackingIntervalId);
        }
      }, 50); // Adjust the speed of hacking animation by changing the interval duration
    };

    startHackingAnimation();

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
          &#123; <span>C</span>lub for <span>I</span>nnovation, <span>P</span>
          rogramming, <span>H</span>igher <span>E</span>ducation <span>R</span>
          esources, and <span>S</span>tartups &#125;
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
      </div>

      <div className="about-us" ref={aboutUsRef}>
        <div className="about-section vision-mission">
          <h2>OBJECTIVES OF OUR CLUB</h2>
          {/* Map through objectives and render AccordionItem for each */}
          <div className="accordion-points">
            {objectives.map((objective, index) => (
              <AccordionItem
                key={index}
                title={objective.title}
                description={objective.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="about-section club-body">
        <h2>THE TEAM</h2>
        <div className="leadership-team">
          {/* Reuse the Card component for each team member */}
          {teamData.map((member, index) => (
            <Card key={index} {...member} />
          ))}
        </div>
      </div>
      <UpcomingEventsModal />
      <Footer />
    </div>
  );
};

export default Home;
