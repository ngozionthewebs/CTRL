import React from 'react'; // Make sure to import React
import './service.css';
import Footer from './componets/footer';


const Service = () => {
  return ( 
    <div className="container mt-5">

      <div className="row">
          <div className="col-6 heading3 ">
            <h1>Services</h1>
          </div>

          <div className="col-6 body">
            <p>
              At CTRL, we elevate your startup’s brand and online presence with tailored services. Our
              Web Design & Development team creates high-performing, custom websites. Our Online 
              Campaigns & Marketing Strategies boost visibility and conversions through SEO, social
              media, and targeted ads. Our Corporate Branding services establish your identity with 
              unique logos and visual elements. Partner with us for exceptional results.
            </p>
          </div>
      </div>

      <div className="row block">
          <div className="col-6 heading4 ">
                <h1>Web Design <br/>
                & Development</h1>
                <p>We build custom websites that not only look great but perform well.
                  From responsive designs to e-commerce integrations, we 
                  tailor every website to meet your business needs.</p>
              </div>

              <div className="col-6 body-copy ">
                <p>
                1. UI/UX Design: <br/>We create intuitive and engaging user experiences through thorough <br/>research and usability testing. Our designs balance aesthetic appeal<br/> with functionality, ensuring seamless interactions that enhance user<br/> satisfaction.<br/><br/>
                2. WordPress Development:<br/>Our WordPress Development services focus on custom themes and <br/>plugins tailored to your needs. We optimize performance, security,<br/> and SEO, providing a robust platform that supports your content<br/> management and growth.<br/><br/>
                3. E-commerce Solutions:<br/>We deliver comprehensive E-commerce Solutions, including user-<br/>friendly product pages and secure payment gateways. Our services <br/>ensure a seamless shopping experience that drives conversions and<br/> meets customer needs.<br/><br/>
                4. Mobile-Responsive Websites:<br/>We design Mobile-Responsive Websites that adapt beautifully to all <br/>devices. Our responsive techniques enhance user engagement and<br/>improve SEO, ensuring your site performs well on smartphones,<br/> tablets, and desktops.<br/><br/>
                </p>
              </div>
       </div>

       <div className="row block">
          <div className="col-6 heading4 ">
                <h1>Online Campaigns<br/>
                & Marketing Strategies</h1>
                <p>Our marketing strategies are designed to increase visibility and 
                  drive conversions. We use a mix of SEO, social media marketing, 
                  email campaigns, and paid advertising to help startups grow..</p>
              </div>

              <div className="col-6 body-copy ">
                <p>
                1. SEO Optimisation: <br/>Our SEO Optimisation services enhance your website's visibility on <br/>search engines through keyword research and on-page/off-page<br/> strategies. We optimise content, meta tags, and build quality <br/>backlinks, providing ongoing analysis to track performance and<br/>attract organic traffic.<br/><br/>
                2. Social Media Marketing:<br/>We help you build a strong online presence with tailored Social Media <br/>Marketing strategies. Our team creates engaging content, manages <br/> accounts, and analyses performance metrics to optimise campaigns<br/> for brand awareness and audience engagement.<br/><br/>
                3. Google & Facebook Ads Campaigns:<br/>We design targeted Google and Facebook Ads Campaigns to <br/>maximise reach and drive qualified traffic. Our services include<br/>audience segmentation, compelling ad copy, and continuous <br/>monitoring to ensure optimal return on investment (ROI).<br/><br/>
                4. Email Marketing:<br/>Our Email Marketing services focus on personalised campaigns that<br/>engage and convert. We design visually appealing emails, segment <br/>audiences, and analyse campaign performance to improve <br/> engagement and nurture customer relationships.<br/><br/>
                </p>
              </div>
       </div>

       <div className="row block">
          <div className="col-6 heading4 ">
                <h1>Corporate Branding</h1>
                <p>Your brand is your business identity. We help startups develop <br/>
                  logos, brand colors, typography, and a complete visual identity<br/>
                   that speaks to their audience.</p>
              </div>

              <div className="col-6 body-copy ">
                <p>
                1. Logo Design: <br/>Our Logo Design services create distinctive and memorable logos<br/>that reflect your brand's identity. We collaborate closely with you, <br/> developing multiple concepts and refining the chosen design to <br/> ensure versatility across various applications.<br/><br/>
                2. Brand Guidelines Creation:<br/>We provide comprehensive Brand Guidelines that outline your <br/>brand's visual and verbal identity. These guidelines include logo<br/> usage, colour palettes, typography, and imagery style, ensuring <br/>consistency across all platforms and materials.<br/><br/>
                3. Business Card & Stationery Design:<br/>Our Business Card & Stationery Design services deliver professional <br/>materials that leave a lasting impression. We design business cards <br/>and customised stationery, including letterheads and envelopes, to <br/>ensure cohesive branding for all communications.<br/>
                </p>
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

export default Service; 
