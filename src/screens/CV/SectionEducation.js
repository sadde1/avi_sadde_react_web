import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import { useGlobalContext } from "../../services/GlobalProvider";
import Technion from "./Technion";
import Bosmat from "./Bosmat";
import "../../Styles/App.css";
import "../../Styles/ScreenCV.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imgTechnion_p from "../../assets/images/CV/technion_l.jpg";
import imgTechnion_l from "../../assets/images/CV/technion_p.jpg";
import imgBosmat_p from "../../assets/images/CV/bosmat_p.jpg";
import imgBosmat_l from "../../assets/images/CV/bosmat_l.jpg";

function SectionEducationImp() {
  const {
    setBgrImgCV_p,
    setBgrImgCV_l,
    setBgrImgCVEducation_p,
    setBgrImgCVEducation_l,
  } = useGlobalContext();
  return (
    <Accordion className="bg-transparent" flush>
      <Accordion.Item eventKey="12">
        <Accordion.Header>
          <div className="task">
            <FormattedMessage id={EnumStringKeys.CV_Task_Technion} />
          </div>
        </Accordion.Header>
        <Accordion.Body
          onEntered={() => {
            setBgrImgCV_p(imgTechnion_p);
            setBgrImgCV_l(imgTechnion_l);
            setBgrImgCVEducation_p(imgTechnion_p);
            setBgrImgCVEducation_l(imgTechnion_l);
          }}
          onExit={() => {
            setBgrImgCV_p(null);
            setBgrImgCV_l(null);
            setBgrImgCVEducation_p(null);
            setBgrImgCVEducation_l(null);
          }}
        >
          <Technion></Technion>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="13">
        <Accordion.Header>
          <div className="task">
            <FormattedMessage id={EnumStringKeys.CV_Task_Bosmat} />
          </div>
        </Accordion.Header>
        <Accordion.Body
          onEntered={() => {
            setBgrImgCV_p(imgBosmat_p);
            setBgrImgCV_l(imgBosmat_l);
            setBgrImgCVEducation_p(imgBosmat_p);
            setBgrImgCVEducation_l(imgBosmat_l);
          }}
          onExit={() => {
            setBgrImgCV_p(null);
            setBgrImgCV_l(null);
            setBgrImgCVEducation_p(null);
            setBgrImgCVEducation_l(null);
          }}
        >
          <Bosmat></Bosmat>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
class SectionEducation extends React.Component {
  render() {
    return <SectionEducationImp></SectionEducationImp>;
  }
}

export default SectionEducation;
