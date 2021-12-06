import Image from 'next/image'
import image1 from '../../images/Image1.jpg';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div>
        <h2 className="green-text">Hello!</h2>
        <h2>My name is <span className="green-text">Thomas</span></h2>
        <h2>and I'm a Full-Stack</h2>
        <h2 className="green-text">Web Developer</h2>
        <p>I have a deep passion for Computer Science and Software Engineering, including Fullstack Development.</p>
        <a href="#contact">Contact Me</a>
      </div>
      <span className="about-image">
        <Image src={image1} width="200" height="200" />
      </span>
    </section>
  )
}

export default About;