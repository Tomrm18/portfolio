import { FC } from 'react';
import { Socials } from "@components";

export const Footer:FC = () => {
  return (
    <footer className="footer">
      <Socials />
      <p>Thomas Maguire @ {new Date().getFullYear()}</p>
    </footer>
  )
}

