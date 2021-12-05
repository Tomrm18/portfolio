import { FC } from 'react';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi'

interface Props {
  imgSrc: any;
  title: string;
  desc: string;
  techOne?: string;
  techTwo?: string;
  techThree?: string;
  techFour?: string;
}

const Project:FC<Props> = ({imgSrc, title, desc, techOne, techTwo, techThree, techFour}) => {

  

  return (
    <span className="project-item">
      <Image src={imgSrc} width="450" height="250" />
      <div className="project-item-title-container">
        <h3 className="project-item-title">{title}</h3>
        <ul className="project-item-icons">
          <li><FiGithub /></li>
          <li><FiExternalLink /></li>
        </ul>
      </div>
      <p className="project-item-desc">{desc}</p>
      <ul className="project-item-tech">
        <li>{techOne}</li>
        <li>{techTwo}</li>
        {techThree ?? <li>{techThree}</li>}
      </ul>
    </span>
  )
}

export default Project;