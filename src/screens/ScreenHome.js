import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../lang/stringKeys";
import "../Styles/App.css";
import "../Styles/ScreenHome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imgCV from "../assets/images/CV/CV.jpg";
import imgGallery from "../assets/images/Gallery/Gallery.jpg";
import imgContact from "../assets/images/Contact/Contact.jpg";
import ImgLinks from "../assets/images/Links/Links.jpg";

const pages = [
  [
    EnumStringKeys.Home_CV,
    imgCV,
    getComputedStyle(document.documentElement).getPropertyValue("--cv_tint"),
    "/cv",
  ],
  [
    EnumStringKeys.Home_Contact,
    imgContact,
    getComputedStyle(document.documentElement).getPropertyValue(
      "--contact_tint"
    ),
    "/contact",
  ],
  [
    EnumStringKeys.Home_Links,
    ImgLinks,
    getComputedStyle(document.documentElement).getPropertyValue("--links_tint"),
    "/links",
  ],
  [
    EnumStringKeys.Home_Gallery,
    imgGallery,
    getComputedStyle(document.documentElement).getPropertyValue(
      "--gallery_tint"
    ),
    "/gallery",
  ],
];

class ScreenHome extends React.Component {
  render() {
    return <ScreenHomeImp></ScreenHomeImp>;
  }
}
function ScreenHomeImp() {
  const navigate = useNavigate();
  return (
    <Stack className="vh-100">
      <div className="bg-dark apptitle hometext">
        <FormattedMessage id={EnumStringKeys.Home_Title} />
      </div>
      <div className="bg-transparent row align-items-center m-0 p-4 homemain">
        <Container className="container">
          <Row>
            {pages.map((row, index) => (
              <Col className="bg-transparent p-4" xs="6" sm="6" lg="3">
                <Button
                  variant="link"
                  className="homebutton rounded p-0"
                  style={{ "background-color": pages[index][2] }}
                  onClick={() => navigate(pages[index][3], { replace: false })}
                >
                  <Image
                    className="bg-transparent m-0 p-1 homeimage"
                    src={pages[index][1]}
                    alt={pages[index][0]}
                  />
                  <span className="homespan" style={{ color: pages[index][2] }}>
                    <FormattedMessage id={pages[index][0]} />
                  </span>
                </Button>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Stack>
  );
}

export default ScreenHome;
