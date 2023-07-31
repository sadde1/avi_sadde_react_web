import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import { useGlobalContext } from "../../services/GlobalProvider";
import Downloads from "./Downloads";
import Web from "./Web";
import Projects from "./Projects";
import "../../Styles/App.css";
import "../../Styles/ScreenLinks.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imgDownloads_p from "../../assets/images/Links/downloads_p.jpg";
import imgDownloads_l from "../../assets/images/Links/downloads_l.jpg";
import imgWeb_p from "../../assets/images/Links/web_p.jpg";
import imgWeb_l from "../../assets/images/Links/web_l.jpg";
import imgProjects_p from "../../assets/images/Links/projects_p.jpg";
import imgProjects_l from "../../assets/images/Links/projects_l.jpg";

function SectionProfessionalImp() {
  const {
    setBgrImgLinks_p,
    setBgrImgLinks_l,
    setBgrImgLinksProfessional_p,
    setBgrImgLinksProfessional_l,
  } = useGlobalContext();

  return (
    <Accordion className="bg-transparent" flush>
      <Accordion.Item eventKey="19">
        <Accordion.Header>
          <div className="task">
            <FormattedMessage id={EnumStringKeys.Links_Task_Downloads} />
          </div>
        </Accordion.Header>
        <Accordion.Body
          onEntered={() => {
            setBgrImgLinks_p(imgDownloads_p);
            setBgrImgLinks_l(imgDownloads_l);
            setBgrImgLinksProfessional_p(imgDownloads_p);
            setBgrImgLinksProfessional_l(imgDownloads_l);
          }}
          onExit={() => {
            setBgrImgLinks_p(null);
            setBgrImgLinks_l(null);
            setBgrImgLinksProfessional_p(null);
            setBgrImgLinksProfessional_l(null);
          }}
        >
          <Downloads></Downloads>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="20">
        <Accordion.Header>
          <div className="task">
            <FormattedMessage id={EnumStringKeys.Links_Task_Web} />
          </div>
        </Accordion.Header>
        <Accordion.Body
          onEntered={() => {
            setBgrImgLinks_p(imgWeb_p);
            setBgrImgLinks_l(imgWeb_l);
            setBgrImgLinksProfessional_p(imgWeb_p);
            setBgrImgLinksProfessional_l(imgWeb_l);
          }}
          onExit={() => {
            setBgrImgLinks_p(null);
            setBgrImgLinks_l(null);
            setBgrImgLinksProfessional_p(null);
            setBgrImgLinksProfessional_l(null);
          }}
        >
          <Web></Web>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="21">
        <Accordion.Header>
          <div className="task">
            <FormattedMessage id={EnumStringKeys.Links_Task_Projects} />
          </div>
        </Accordion.Header>
        <Accordion.Body
          onEntered={() => {
            setBgrImgLinks_p(imgProjects_p);
            setBgrImgLinks_l(imgProjects_l);
            setBgrImgLinksProfessional_p(imgProjects_p);
            setBgrImgLinksProfessional_l(imgProjects_l);
          }}
          onExit={() => {
            setBgrImgLinks_p(null);
            setBgrImgLinks_l(null);
            setBgrImgLinksProfessional_p(null);
            setBgrImgLinksProfessional_l(null);
          }}
        >
          <Projects></Projects>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
class SectionProfessional extends React.Component {
  render() {
    return <SectionProfessionalImp></SectionProfessionalImp>;
  }
}

export default SectionProfessional;
