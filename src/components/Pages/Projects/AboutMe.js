
function AboutMe(props) {
  
  const AboutMeRef = props.AboutMeRef

  return (
    <div ref={AboutMeRef} className="pages" id="aboutMe">

      <div className="imageBox">
        <img src={require("../../../Pics/jeff.jpg")} alt={"JeffLu"} className="aboutMePic" />
      </div>

      <div className="aboutMeText">
        <div className="boxBorder">
          <h2>Hi I'm Jeff</h2>
          <p>I am a Full-Stack developer with a strong background in shipping and logistics. I am an avid athlete, and enjoy passing time taking part in sports and activities. Born and raised in Brooklyn, I still find excitement in exploring the nooks and crannies of NYC and its ever changing communities. This career switch is a huge pivot in my life, and I welcome the challenges along with the creative freedom that it brings. Check out my projects.
          </p>
        </div>
      </div>

    </div>
  )
}

export default AboutMe