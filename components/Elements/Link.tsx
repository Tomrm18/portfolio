import { FC, ReactNode } from 'react';

interface Props {
  href: string;
  target?: string;
  children?: ReactNode;
}

export const Link:FC<Props> = ({href, children, target}) => {
  return (
    <a href={href} target={target ? target : "_self"} rel="noreferrer">
      {children}
    </a>
  )
}
