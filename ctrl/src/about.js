import React from 'react'; // Make sure to import React
import './about.css'
import ImageCard from './componets/imagecard';
import Banner from './componets/banner';

const AboutUs = () => {
  return ( 
    <div className="container mt-5">
      <div className="row">
          <div className="col-12 heading" >
              <h1>Our <span className="italic-text">Story</span> </h1>
              <p>
              CTRL is a dynamic agency dedicated to empowering startups by providing <br/>comprehensive design and marketing solutions. Founded with the mission to <br/> foster innovation and growth, CTRL offers a unique blend of thoughtful design, <br/> creative campaigns, and tailored marketing strategies that resonate with <br/> target audiences and drive results.
              </p>
          </div>
      </div>

      <div className="row">
        <div className="col-12">
          <ImageCard/>
        </div>
      </div>

      <div className="row">
        <div className="col-6 port">
          <h1> Our <span className="italic-text">Vision</span></h1>

          <p>At CTRL, we believe that every startup deserves a unique identity and a strong digital presence to stand out in today’s competitive market. Our vision is to empower innovators and entrepreneurs by providing them with the tools and strategies they need to not only survive but thrive in an ever-evolving landscape.</p>
        </div>

        <div className="col-6">
          <div className="work"></div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Banner/>
        </div>
      </div>
    </div>
  );
}

export default AboutUs; 
