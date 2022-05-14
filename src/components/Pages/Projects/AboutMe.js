
function AboutMe(props) {
  
  const AboutMeRef = props.AboutMeRef

  return (
    <div ref={AboutMeRef} className="pages" id="AboutMe">
      <h2> Hi I'm Jeff </h2>
      <p>Full-Stack developer, with a background in shipping and logistics. I bring my experience of notable attention to detail, partaking in handling moving parts through production. I relish in the satisfaction of a completed project and patience that comes with it. Combining these experiences, I hope to create more ease of access applications for people across the globe.</p>
    </div>
  )
}

export default AboutMe