import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Image from 'next/image'
import image1 from '../../images/Image1.jpg';




export const AboutSection = () => {

  const element = useRef(null);

  useEffect(() => {

    const typed = new Typed(element.current as unknown as Element, {
      strings: ["Web Developer", "Software Engineer", "Programmer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 130,
      backSpeed: 100,
      backDelay: 350,
      showCursor: false,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    }
  }, [])

  return (
    <section className="about-section" id="about">
      <div>
        <h2 className="green-text">Hello!</h2>
        <h2>My name is <span className="green-text">Thomas</span></h2>
        <h2>and I&apos;m a Full-Stack</h2>
        <h2 className="green-text typed" ref={element}></h2>
        <p>I have a deep passion for Computer Science and Software Engineering, including Fullstack Development.</p>
        <a href="#contact">Contact Me</a>
      </div>
      <span className="about-image">
        <Image src={image1} width="200" height="200" />
      </span>
    </section>
  )
}
