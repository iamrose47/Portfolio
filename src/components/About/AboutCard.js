import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rose Singh Lalotra </span>
            from <span className="purple"> Jammu And Kashmir, India.</span>
            <br />
            I am currently open for the opportunities.
            <br />
            I had completed my Bachelor of Engineering from Chandigarh University. Also, succesfully completed FullStack Development Certification and Data Structures and
            Algorithms  Certification from Codehelp.
            <br />
            <br />
            Beyond coding, I enjoy immersing myself in a variety of activities:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Taking long drives and exploring new routes
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and discovering new places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rose Singh Lalotra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
