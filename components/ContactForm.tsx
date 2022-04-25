import { FC } from 'react';

export const ContactForm:FC = () => {
  return (
    <form action="mailto:tmaguire2002@yahoo.com.au" method="POST" className="contact-form" encType="multipart/form-data" >
      <input type="text" placeholder="Name" />
      <input type="email" name="" id="" placeholder="Email" />
      <textarea placeholder="Your Message">
      </textarea>
      <button type="submit">Send</button>
    </form>
  )
}
