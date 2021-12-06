import { FC } from 'react';
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io'

const Socials:FC = ({}) => {
  return (
    <div className="footer-socials">
      <a href="https://github.com/Tomrm18" target="_blank"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/thomas-maguire018/" target="_blank"><FaLinkedin /></a>
      <a href="mailto:tmaguire2002@yahoo.com.au" target="_blank"><IoMdMail /></a>
      <a href="https://twitter.com/tomrmaguire" target="_blank"><FaTwitterSquare /></a>
    </div>
  )
}

export default Socials;
