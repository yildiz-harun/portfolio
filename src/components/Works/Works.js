import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import classes from "./Works.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../img/1.jpg";
import img2 from "../../img/2.jpg";
import img3 from "../../img/3.jpg";
import img4 from "../../img/4.jpg";
import img5 from "../../img/5.jpg";

function Works() {
  return (
    <div className={classes.Works} id="portfolio/works">
      <div className={classes.Center}>
        <Container>
          <Row>
            <Col></Col>
            <Col md={8}>
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={img1} alt="First slide" />
                  <Carousel.Caption>
                    <h3>Project 1</h3>
                    <a href={"https://github.com/yildiz-harun/Project1"}>
                      Form Validator
                    </a>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Project 2</h3>
                    <a href={"https://github.com/yildiz-harun/Project2"}>
                      Breakout Game
                    </a>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={img3} alt="Third slide" />

                  <Carousel.Caption>
                    <h3>Project 3</h3>
                    <a href={"https://github.com/yildiz-harun/Project3"}>
                      Custom Video Player
                    </a>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img4}
                    alt="Fourth slide"
                  />

                  <Carousel.Caption>
                    <h3>Project 4</h3>
                    <a href={"https://github.com/yildiz-harun/Project4"}>
                      Dom Array Methods
                    </a>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={img5} alt="Fifth slide" />

                  <Carousel.Caption>
                    <h3>Project 5</h3>
                    <a href={"https://github.com/yildiz-harun/Project5"}>
                      Exchange Rate
                    </a>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Works;
