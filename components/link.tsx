import { FC } from 'react';

interface Props {
  href: string;
}

const Link:FC<Props> = ({children, href}) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default Link;
