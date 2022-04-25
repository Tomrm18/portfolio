import { FC } from 'react'
import Image from "next/image"

interface Props {
  image: string;
}

export const Skill:FC<Props> = ({ image }) => {
  return (
    <span>
      <Image className="skills-square" src={image} width="80" height="80" />
    </span>
  )
}
