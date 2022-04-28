import { ExperienceField } from "@components";

export const ExperienceSection = () => {
  return (
    <section className="exp-section" id="experience">
      <h2>Work Experience</h2>
      <ExperienceField jobTitle="Software Engineer" company="Gymetrix" start="APR 2022" type="Contract" desc={["Developed secure and performant customer facing gym application using React Native and TypeScript.", "Enabled secure login and authentication via Encryption and Biometrics.", "Established secure API connections to a fully customised backend to pull and render data from."]} />
      <ExperienceField jobTitle="IT Client Support Assistant" company="The University of Newcastle" start="JAN 2022" type="Part-time" desc={["Utilised University customised ServiceNow platform to manage multiple client tickets.", "Communicated with clients, enabling quick and effective customer support.", "Updated IT articles ensuring IT Staff can access up-to-date information in a readable and reliable way."]} />
    </section>
  )
}