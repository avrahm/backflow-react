import React, { useState } from "react";
import { Button, Carousel } from "react-bootstrap";

import "./carousel.css";

import carouselImage1 from "../../images/north-geogia-mountains.jpg";
import carouselImage2 from "../../images/cover.jpg";

import logo from "../../images/backflow-testers-logo.png";
import { Link } from "react-router-dom";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="carousel-item carousel-item-2">
          <img
            className="d-block w-100"
            src={carouselImage1}
            alt="North Georgia Mountains"
          />
          <Carousel.Caption className="carousel-caption text-right">
            <div className="logo">
              <img src={logo} alt="Backflow Testers North GA Logo" />
            </div>
            <p>
              We are Georgia’s trusted experts on all thing’s backflow related.
              We work for countless privately-owned businesses and residences,
              but we also work for many local municipalities to ensure the
              drinking water for our communities is kept safe.
            </p>
            <Link to="tel:706-438-2522">
              <Button>Call Now 706-438-2522</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item carousel-item-2">
          <img
            className="d-block w-100"
            src={carouselImage2}
            alt="Backflow Pipes on a Beach"
          />

          <Carousel.Caption className="carousel-caption text-left">
            <h3 className="featurette-heading font-weight-bolder">
              What is backflow and why do I need prevention?
            </h3>
            <p>
              Backflow means the undesirable reversal of flow of a liquid, gas,
              or suspended solid into the potable water supply; a backflow
              preventer is designed to keep this from happening.
            </p>

            <Link to="/whatisbackflow">
              <Button>Learn More</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
