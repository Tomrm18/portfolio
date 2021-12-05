import { FC } from 'react';
import Project from '../project';
import img from '../../images/project1.png'

const Projects:FC = () => {
  return (
    <section className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        <Project title={"Locara"} imgSrc={img} desc={"Locara Subscription Service."} techOne={"React"} techTwo={"Sass"} />

        <Project title={"Locara"} imgSrc={img} desc={"Locara Subscription Service."} techOne={"React"} techTwo={"Sass"} />

        {/* <Project title={"Locara"} imgSrc={img} desc={"Locara Subscription Service."} tech={["blah", "yeet", "etc"]} /> */}
      </div>
    </section>
  )
}

export default Projects;
