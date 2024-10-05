import React from 'react'; // Make sure to import React
import './about.css'
import ImageCard from './componets/imagecard';
import Banner from './componets/banner';
import Member1 from './componets/member1';
import Member2 from './componets/member2';
import Member3 from './componets/member3';
import Footer from './componets/footer';


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

        <div className="row">
          <div className="col-4">
            <Member1/>
          </div>

           <div className="col-4">
            <Member2/>
          </div>

           <div className="col-4">
            <Member3/>
          </div>
        </div>

        <div className="row">
          <div className="col-12 heading2">

          <h1>Why <span className="italic-text">Choose</span> Us?</h1>
              <p>
              Choose CTRL to elevate your startup with our proven track record in building <br/> online presence from the ground up. We combine innovative design with data-<br/>driven marketing to deliver customised solutions that reflect your unique<br/> vision. Our dedicated team acts as your strategic partner, focusing on long-<br/>term success and customer loyalty. With CTRL, you gain a partner committed<br/> to turning your ideas into actionable strategies that drive results.
              </p>
          </div>
        </div>
      
      <div className="row">
        <div className="col-12">
          <Footer/>
        </div>
      </div>

    </div>
  );
}

export default AboutUs; 
