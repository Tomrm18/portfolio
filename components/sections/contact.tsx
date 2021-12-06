import { FC } from 'react';
import Form from '../form';

interface Props {
}

const Contact:FC<Props> = () => {
  return (
    <section id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <Form />
    </section>
  )
}

export default Contact;
