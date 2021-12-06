import { FC } from 'react';

const Form:FC = ({}) => {
  return (
    <form action="mailto:tmaguire2002@yahoo.com.au" method="POST" className="contact-form">
      <input type="text" placeholder="Name" />
      <input type="email" name="" id="" placeholder="Email" />
      <textarea placeholder="Your Message">
      </textarea>
      <button type="submit">Send</button>
    </form>
  )
}

export default Form;
