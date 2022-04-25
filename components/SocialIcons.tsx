import { FC } from 'react';

import { Link } from "@components";

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io'

export const Socials:FC = ({}) => {
  return (
    <div className="footer-socials">
      <Link href="https://github.com/Tomrm18" target='_blank'>
        <FaGithub />
      </Link>
      <Link href="https://www.linkedin.com/in/thomas-maguire018/" target='_blank'>
        <FaLinkedin />
      </Link>
      <Link href="mailto:tmaguire2002@yahoo.com.au" target='_blank'>
      <IoMdMail />
      </Link>
    </div>
  )
}
