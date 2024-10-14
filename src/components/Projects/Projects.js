import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import chair from "../../Assets/Projects/modernchair.png";
import editor from "../../Assets/Projects/codeEditor.png";
import studynotion from "../../Assets/Projects/mainpage.png";
import google from "../../Assets/Projects/google.png";
import dev from "../../Assets/Projects/devdetective.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studynotion}
              isBlog={false}
              title="Study Notion"
              description= "StudyNotion is an intuitive and dynamic ed-tech platform designed to enable users to create, access, and evaluate educational content. It provides an engaging and interactive experience for learners while also empowering instructors to share their expertise and connect with a global audience. Built with the MERN stack (ReactJS, NodeJS, MongoDB, and ExpressJS), StudyNotion ensures a seamless experience for both students and educators."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://studynotion-frontend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="weather Forecasting App"
              description="A weather forecasting app that provides real-time updates on temperature, humidity, and weather conditions for any location. It offers a user-friendly interface with personalized forecasts based on geolocation data."
              ghLink="https://github.com/iamrose47/weather-app"
              demoLink="https://modernchairbyroses.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/iamrose47"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chair}
              isBlog={false}
              title="Modern Chair"
              description="An interactive 3D modern chair model with smooth animations, allowing users to explore its design from various angles. Built using JavaScript and CSS for a realistic furniture viewing experience."
              ghLink="https://github.com/iamrose47/modern-chair"
              demoLink="https://modernchairbyroses.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={google}
              isBlog={false}
              title="Google Search Engine"
              description="A Google Search engine clone featuring dark and light mode toggle for a customizable user interface. Built with React, it offers seamless search functionality and theme-switching for improved user experience."
              ghLink="https://github.com/iamrose47/google-search-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dev}
              isBlog={false}
              title="Dev Detective"
              description="Dev Detective is a web app designed to search and display detailed profiles of GitHub users."
              ghLink="https://github.com/iamrose47/devdetective"
              demoLink = "https://classy-pixie-bc99c5.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
