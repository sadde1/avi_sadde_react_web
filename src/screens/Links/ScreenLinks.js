import React from "react";
import Stack from "react-bootstrap/Stack";
import Accordion from "react-bootstrap/Accordion";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import { useGlobalContext } from "../../services/GlobalProvider";
import NavBar from "../NavBar";
import SectionProfessional from "./SectionProfessional";
import SectionPersonal from "./SectionPersonal";
import "../../Styles/App.css";
import "../../Styles/ScreenLinks.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ScreenLinksImp() {
  const {
    bgrImgLinks_p,
    bgrImgLinks_l,
    setBgrImgLinks_p,
    setBgrImgLinks_l,
    bgrImgLinksProfessional_p,
    bgrImgLinksProfessional_l,
    bgrImgLinksPersonal_p,
    bgrImgLinksPersonal_l,
  } = useGlobalContext();

  return (
    <Stack
      direction="vertical"
      className="bg-dark row m-0 p-0 overflow-auto z_front"
    >
      <NavBar
        _title={EnumStringKeys.Links_Title}
        _color={getComputedStyle(document.documentElement).getPropertyValue(
          "--links_tint"
        )}
      ></NavBar>

      <div className="m-0 p-0 bg-black z_back">
        <div className="m-0 p-0 z_front">
          <Accordion className="bg-transparent" flush>
            <Accordion.Item eventKey="15">
              <Accordion.Header>
                <div className="linkssection">
                  <FormattedMessage
                    id={EnumStringKeys.Links_Section_Professional}
                  />
                </div>
              </Accordion.Header>
              <Accordion.Body
                onEntered={() => {
                  setBgrImgLinks_p(bgrImgLinksProfessional_p);
                  setBgrImgLinks_l(bgrImgLinksProfessional_l);
                }}
                onExit={() => {
                  setBgrImgLinks_p(null);
                  setBgrImgLinks_l(null);
                }}
              >
                <SectionProfessional></SectionProfessional>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="16">
              <Accordion.Header>
                <div className="linkssection">
                  <FormattedMessage
                    id={EnumStringKeys.Links_Section_Personal}
                  />
                </div>
              </Accordion.Header>
              <Accordion.Body
                onEntered={() => {
                  setBgrImgLinks_p(bgrImgLinksPersonal_p);
                  setBgrImgLinks_l(bgrImgLinksPersonal_l);
                }}
                onExit={() => {
                  setBgrImgLinks_p(null);
                  setBgrImgLinks_l(null);
                }}
              >
                <SectionPersonal></SectionPersonal>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <picture>
          <source media="(orientation: landscape)" srcset={bgrImgLinks_l} />
          <source className="imgbgr z_back" srcset={bgrImgLinks_p} />
          <img className="imgbgr z_back" src={bgrImgLinks_p} alt=""></img>
        </picture>
      </div>
    </Stack>
  );
}
class ScreenLinks extends React.Component {
  render() {
    return <ScreenLinksImp></ScreenLinksImp>;
  }
}

export default ScreenLinks;
