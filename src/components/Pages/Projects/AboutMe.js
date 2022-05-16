
function AboutMe(props) {
  
  const AboutMeRef = props.AboutMeRef

  return (
    <div ref={AboutMeRef} className="pages" id="aboutMe">
      <div className="aboutMeText">
        <h2> Hi I'm Jeff </h2>
        <p>I am a Full-Stacks developer with a strong background in shipping and logistics. I am a very laid back, avid athlete,  and enjoy passing time taking part in activities. This career switch is a huge pivot in my life, and I welcome the challenges that it brings. Check out my projects. I am currently working on designing my portfolio page as well.
        </p>
      </div>
      <img src={require("../../../Pics/jeff.jpg")} alt={"JeffLu"} className="aboutMePic"/>
    </div>
  )
}

export default AboutMe