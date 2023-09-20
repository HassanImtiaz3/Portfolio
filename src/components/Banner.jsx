import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = [
    "Web Developer",
    "Wordpress Developer",
    "Shopify Developer",
  ];
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, settext] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    settext(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(400);
    }
  };

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-item-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">
                Welcome to my Portfolio <BsArrowRight />{" "}
              </span>
              <h1>
                {`Hi I'm Hassan Imtiaz `} <span className="wrap">{text}</span>
              </h1>
              <p>
                I design Innovative Websites and exceptional user interfaces for
                apps and Websites.
              </p>
              <span className="tagline">
                <a
                  href={process.env.PUBLIC_URL + "/Hassan.pdf"} // Replace with the actual file path
                  download="Hassan.pdf" // Specify the file name
                  className="download-link"
                >
                  Download Resume
                </a>
                {/* <a
                  href="./src/Hassan%20Imtiaz.pdf"
                  download="Hassan Imtiaz"
                  className="btn-download"
                >
                  Download Resume <BsArrowRight />
                </a> */}
              </span>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header Image" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Banner;
