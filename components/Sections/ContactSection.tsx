import { FC } from 'react';
import { ContactForm } from '@components';

interface Props {
}

export const ContactSection:FC<Props> = () => {
  return (
    <section id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <ContactForm />
    </section>
  )
}
