import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import { useGlobalContext } from "../../services/GlobalProvider";
import Music from "./Music";
import Social from "./Social";
import "../../Styles/App.css";
import "../../Styles/ScreenLinks.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imgMusic_p from "../../assets/images/Links/music_p.jpg";
import imgMusic_l from "../../assets/images/Links/music_l.jpg";
import imgSocial_p from "../../assets/images/Links/social_p.jpg";
import imgSocial_l from "../../assets/images/Links/social_l.jpg";

function SectionPersonalImp() {
  const {
    setBgrImgLinks_p,
    setBgrImgLinks_l,
    setBgrImgLinksPersonal_p,
    setBgrImgLinksPersonal_l,
  } = useGlobalContext();

  return (
    <Accordion className="bg-transparent" flush>
      <Accordion.Item eventKey="22">
        <Accordion.Header>
          <div className="task">
            <FormattedMessage id={EnumStringKeys.Links_Task_Music} />
          </div>
        </Accordion.Header>
        <Accordion.Body
          onEntered={() => {
            setBgrImgLinks_p(imgMusic_p);
            setBgrImgLinks_l(imgMusic_l);
            setBgrImgLinksPersonal_p(imgMusic_p);
            setBgrImgLinksPersonal_l(imgMusic_l);
          }}
          onExit={() => {
            setBgrImgLinks_p(null);
            setBgrImgLinks_l(null);
            setBgrImgLinksPersonal_p(null);
            setBgrImgLinksPersonal_l(null);
          }}
        >
          <Music></Music>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="23">
        <Accordion.Header>
          <div className="task">
            <FormattedMessage id={EnumStringKeys.Links_Task_Social} />
          </div>
        </Accordion.Header>
        <Accordion.Body
          onEntered={() => {
            setBgrImgLinks_p(imgSocial_p);
            setBgrImgLinks_l(imgSocial_l);
            setBgrImgLinksPersonal_p(imgSocial_p);
            setBgrImgLinksPersonal_l(imgSocial_l);
          }}
          onExit={() => {
            setBgrImgLinks_p(null);
            setBgrImgLinks_l(null);
            setBgrImgLinksPersonal_p(null);
            setBgrImgLinksPersonal_l(null);
          }}
        >
          <Social></Social>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
class SectionPersonal extends React.Component {
  render() {
    return <SectionPersonalImp></SectionPersonalImp>;
  }
}

export default SectionPersonal;
