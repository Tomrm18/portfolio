import { FC } from 'react'
import Skill from './skill';
import images from '../config/images'

const SkillsGrid:FC = () => {
  return (
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
  )
}

export default SkillsGrid;
