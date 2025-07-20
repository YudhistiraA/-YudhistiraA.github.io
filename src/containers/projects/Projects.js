// src/pages/projects/Projects.jsx
import React from "react";
import "./Project.scss";
import Button from "../../components/button/Button";

const projectList = [
  {
    name: "Game Flappy Bird Javascript",
    url: "https://github.com/YudhistiraA/game-flapybird-javacript",
    description: "A clone of the popular Flappy Bird game written in pure JavaScript.",
  },
  {
    name: "Staking Token",
    url: "https://github.com/YudhistiraA/Staking-Token",
    description: "A simple Ethereum-based staking smart contract system.",
  },
  {
    name: "Maya (Inikoo Ltd)",
    url: "https://github.com/Inikoo-Ltd/maya",
    description: "Enterprise-level web application by Inikoo Ltd (private repo might require access).",
  },
  {
    name: "Realtime Chat App",
    url: "https://github.com/YudhistiraA/realtime-chat-use-REACT-NODEJS",
    description: "A real-time chat application built with React and Node.js using Socket.IO.",
  },
  {
    name: "Aiku (Inikoo Ltd)",
    url: "https://github.com/Inikoo-Ltd/aiku",
    description: "Aiku platform developed by Inikoo Ltd for digital business transformation.",
  },
  {
    name: "Elev8",
    url: "https://github.com/YudhistiraA/Elev8",
    description: "A web-based platform for personal development and growth tracking.",
  },
];

const ProjectCard = ({ name, url, description }) => (
  <div className="repo-card">
    <h2 className="repo-title">{name}</h2>
    <p className="repo-description">{description}</p>
    <a className="repo-link" href={url} target="_blank" rel="noopener noreferrer">
      View on GitHub →
    </a>
  </div>
);

export default function Projects() {
  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <Button
        text="Visit My GitHub"
        className="project-button"
        href="https://github.com/YudhistiraA"
        newTab={true}
      />
    </div>
  );
}
