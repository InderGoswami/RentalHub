import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section__description">
              Welcome to our premier car rental service, where convenience and quality meet to ensure your journey is nothing short of exceptional. Whether you're embarking on a spontaneous road trip or in need of reliable transportation for business, our diverse fleet of vehicles caters to every occasion and preference. With our seamless online booking platform, reserving your ideal car is effortless, allowing you to focus on the adventures ahead. 
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> It encompasses personalized service
                 
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> 
                  Competitive Rates
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> 
                  A dedication to your expectations
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> 
                  Reservation Management
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src="https://freepngimg.com/thumb/lamborghini/3-2-lamborghini-free-png-image.png" alt="https://i.pinimg.com/564x/e6/47/07/e647070d42ce0c60032aafb3dc3e74ca.jpg" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
