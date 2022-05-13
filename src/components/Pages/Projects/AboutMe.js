
function AboutMe(props) {
  
  const AboutMeRef = props.AboutMeRef

  return (
    <div ref={AboutMeRef} className="pages" id="AboutMe">
      <h2> Hi I'm Jeff </h2>
      <p>I am a software engineer, with a background  of six years experience in shipping and logistics. I hope to bring my experience of handling moving parts to create more ease of access applications for people across the world.</p>
    </div>
  )
}

export default AboutMe