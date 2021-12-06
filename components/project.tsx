import { FC } from 'react';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Link from './link';

interface Props {
  imgSrc: any;
  title: string;
  desc: string;
  tech: string[];
  github: string;
  website: string;
}

const Project:FC<Props> = ({imgSrc, title, desc, tech, github, website}) => {

  

  return (
    <span className="project-item">
      <Image src={imgSrc} width="450" height="250" />
      <div className="project-item-title-container">
        <h3 className="project-item-title">{title}</h3>
        <ul className="project-item-icons">
          <li>
            <Link href={github}>
              <FiGithub />
            </Link>
          </li>
          <li>
            <Link href={website}>
              <FiExternalLink />
            </Link>
          </li>
        </ul>
      </div>
      <p className="project-item-desc">{desc}</p>
      <ul className="project-item-tech">
        {tech.map((elem) => (
          <li>{elem}</li>
        ))}
      </ul>
    </span>
  )
}

export default Project;