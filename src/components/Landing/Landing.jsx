// import React from 'react';
// import { useState } from 'react';

import './Landing.css'

function Landing(props) {

  // const Landing = props.LandingRef
  // const [slideH1, setSlideH1] = useState({ transform: "translateX(0)" });
  // const [slideH3, setSlideH3] = useState({ transform: "translateX(0)" });


  // window.addEventListener("scroll", function (event) {
  //   let currentPage = window.pageYOffset;
  //   setSlideH1({ transform: `translateX(${currentPage}%)` });
  //   setSlideH3({ transform: `translateX(${-currentPage}%)` });

  //   console.log(currentPage)
  // });

  // let pageHeight = window.innerHeight;

  return (
    // <div ref={Landing} className="pages" id="landing">
    <div className="pages" id="landing">

      <div className="landingWrapper">

        {/* <h2 id="text-one" style={slideH1}>Hi!</h2> */}
        <h2 id="text-one" >Hi!</h2>

        {/* <h1 id="nameJeff" style={slideH3}>I'm Jeff</h1> */}
        <h1 id="nameJeff" >I'm Jeff</h1>

        <p id="text-two">
          I am a software engineer.
        </p>

        <p id="text-three">
          Welcome to my site!
        </p>

      </div>

    </div >

  )
}

export default Landing