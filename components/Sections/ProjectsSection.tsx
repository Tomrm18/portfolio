import { FC } from 'react';
import { Project } from '@components';
import locaraImg from '../../images/project1.png';
import solentImg from '../../images/project2.png';

export const ProjectsSection:FC = () => {
  return (
    <section className="projects-container" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        <Project title={"Locara"} imgSrc={locaraImg} desc={"Car Subscription Service, query from up to 225 different cars from mongodb database."} tech={["React", "Next JS", "Sass", "Typescript", "Mongodb"]} github={"https://github.com/Tomrm18/locara-project"} website={"https://locara-project-serverless.vercel.app/"}/>

        <Project title={"Solent"} imgSrc={solentImg} desc={"Freelance Developer Platform, heavily inspired by Fiverr and Upwork, authentication handled via Firebase"} tech={["React", "Firebase", "JavaScript"]} github={"https://github.com/Tomrm18/odin-js-final-project"}/>
      </div>
    </section>
  )
}

