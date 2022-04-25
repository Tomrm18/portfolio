import { Skill } from "@components";

import { images } from "../../config";

export const SkillsSection = () => {
  return (
    <section className="skills-container">
      <h2 className="skills-title">My Techstack & Skills</h2>
      <div className="skills-grid">
        <Skill image={images.html}/>
        <Skill image={images.css}/>
        <Skill image={images.sass}/>
        <Skill image={images.js}/>
        <Skill image={images.ts}/>
        <Skill image={images.python}/>
        <Skill image={images.git}/>
        <Skill image={images.react}/>
        <Skill image={images.next}/>
        <Skill image={images.mongo}/>
    </div>
    </section>
  )
}
