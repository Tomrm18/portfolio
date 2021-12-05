import { FC } from 'react'
import Image from "next/image"

interface Props {
  image: any;
}

const Skill:FC<Props> = ({image}) => {
  return (
    <>
      <Image src={image} width="80" height="80" />
    </>
  )
}

export default Skill;
