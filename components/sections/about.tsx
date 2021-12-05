import Image from 'next/image'
import image1 from '../../images/Image1.jpg';

const About = () => {
  return (
    <section className="about-section">
      <div>
        <h2 className="green-text">Hello!</h2>
        <h2>My name is <span className="green-text">Thomas</span></h2>
        <h2>and I'm a Full-Stack</h2>
        <h2 className="green-text">Web Developer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ab veniam eos harum voluptatibus.</p>
        <button>Contact Me</button>
      </div>
      <span className="about-image">
        <Image src={image1} width="200" height="200" />
      </span>
    </section>
  )
}

export default About;