import { FC } from 'react';
import Project from '../project';
import img from '../../images/project1.png'

const Projects:FC = () => {
  return (
    <section className="projects-container" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        <Project title={"Locara"} imgSrc={img} desc={"Locara Subscription Service."} tech={["React", "Sass", "Typescript"]} />

        <Project title={"Locara"} imgSrc={img} desc={"Locara Subscription Service."} tech={["React", "Sass"]} />
      </div>
    </section>
  )
}

export default Projects;
