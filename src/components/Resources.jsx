import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import "./Resources.css";
import Footer from "./Footer";

const Resources = () => {
  const resourceData = [
    {
      name: "Academic Practicals",
      image: "practicals.png",
      link: "https://github.com/Ciphers-hub/Academic-Codes/",
      type: "programming",
    },
    {
      name: "Our questions",
      image: "github-2-2.png",
      link: "https://github.com/ciphershub/QuestionsFromEvents",
      type: "programming",
    },
    {
      name: "C",
      image: "c.png",
      link: "https://www.learn-c.org/",
      type: "programming",
    },
    {
      name: "C++",
      image: "cpp.png",
      link: "https://www.cplusplus.com/",
      type: "programming",
    },
    {
      name: "Data Structures and Algorithms",
      image: "dsa.png",
      link: "https://www.geeksforgeeks.org/data-structures/",
      type: "programming",
    },
    {
      name: "Java",
      image: "java.png",
      link: "https://www.java.org/",
      type: "programming",
    },
    {
      name: "Python",
      image: "python.png",
      link: "https://www.python.org/",
      type: "programming",
    },
    {
      name: "Artificial Intelligence",
      image: "ai.png",
      link: "https://www.analyticsvidhya.com/blog/2018/11/what-is-ai-tutorial/",
      type: "programming",
    },
    {
      name: "Machine Learning",
      image: "ml-image.png",
      link: "https://www.coursera.org/learn/machine-learning",
      type: "programming",
    },
    {
      name: "Data Science",
      image: "data-science.png",
      link: "https://www.kaggle.com/learn/data-science",
      type: "programming",
    },
    // Add higher education resources
    {
      name: "MIT OpenCourseWare",
      image: "mit.png",
      link: "https://ocw.mit.edu/index.htm",
      type: "higher_education",
    },
    {
      name: "Stanford Online",
      image: "stanford.png",
      link: "https://online.stanford.edu/",
      type: "higher_education",
    },
    {
      name: "Khan Academy",
      image: "khan-academy.png",
      link: "https://www.khanacademy.org/",
      type: "higher_education",
    },
  ];

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get("type");

  const filteredResourceData = type
    ? resourceData.filter((resource) => resource.type === type)
    : resourceData;

  return (
    <div className="resources-body">
      <div className="resources-title">
        <h1>RESOURCES</h1>
      </div>
      <div className="resources-page">
        <div className="resource-header">
          <img src="resourcesbg.png" alt="resourcesbg" />
        </div>

        <div className="resource-grid">
          {filteredResourceData.map((resource, index) => (
            <div key={index} className="resource-item">
              <img
                src={resource.image}
                alt={resource.name}
                className="resource-image"
              />
              <h3>{resource.name}</h3>
              <Link
                to={resource.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
