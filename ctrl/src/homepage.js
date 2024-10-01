import React from 'react';
import './homepage.css'; 
import Aura from './componets/aura'
import Card1 from './componets/card1';
import Card2 from './componets/card2';
import Card3 from './componets/card3';
import Footer from './componets/footer';

const Homepage = () => {
  return (
    // Container wrapping the content
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 aura-container">
          <Aura/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offers">
          <h2>What we <span className="italic-text">offer</span> </h2>
          
        </div>
        <div className="col-md-6 offers">
          <p>At our firm, we specialize in crafting tailored web design and development solutions that prioritize both performance and user experience, ensuring your digital presence is both efficient and engaging.</p>
        </div>
      </div>

      <div className="row" >
        <div className="col-md-4">
          <Card1/>
        </div>
        <div className="col-md-4">
          <Card2/>
        </div>
        <div className="col-md-4">
          <Card3/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="eco"></div>
        </div>
        <div className="col-md-6 port">
          <h3>Portfolio <span className="italic-text">Highlights</span></h3>
          <p>EcoShop is an innovative web application designed to promote sustainable <br/>shopping practices by connecting consumers with eco-friendly products <br/>and local businesses. The platform aims to empower users <br/>to make informed purchasing decisions while supporting sustainable<br/> brands.</p>
          <button>VIEW PROJECT HERE</button>
          
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <Footer/>

        </div>
      </div>
    </div>
  );
}

export default Homepage;
