import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import { useGlobalContext } from "../../services/GlobalProvider";
import PersonalDetails from "./PersonalDetails";
import Languages from "./Languages";
import Summary from "./Summary";
import "../../Styles/App.css";
import "../../Styles/ScreenCV.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imgPersonalDetails_p from "../../assets/images/CV/personaldetails_p.jpg";
import imgPersonalDetails_l from "../../assets/images/CV/personaldetails_l.jpg";
import imgLanguages_p from "../../assets/images/CV/languages_p.jpg";
import imgLanguages_l from "../../assets/images/CV/languages_l.jpg";
import imgSummary_p from "../../assets/images/CV/summary_p.jpg";
import imgSummary_l from "../../assets/images/CV/summary_l.jpg";

function SectionGeneralDetailsImp() {
  const {
    setBgrImgCV_p,
    setBgrImgCV_l,
    setBgrImgCVGeneralDetails_p,
    setBgrImgCVGeneralDetails_l,
  } = useGlobalContext();
  return (
    <Accordion className="bg-transparent" flush>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <div className="task">
            <FormattedMessage id={EnumStringKeys.CV_Task_PersonalDetails} />
          </div>
        </Accordion.Header>
        <Accordion.Body
          onEntered={() => {
            setBgrImgCV_p(imgPersonalDetails_p);
            setBgrImgCV_l(imgPersonalDetails_l);
            setBgrImgCVGeneralDetails_p(imgPersonalDetails_p);
            setBgrImgCVGeneralDetails_l(imgPersonalDetails_l);
          }}
          onExit={() => {
            setBgrImgCV_p(null);
            setBgrImgCV_l(null);
            setBgrImgCVGeneralDetails_p(null);
            setBgrImgCVGeneralDetails_l(null);
          }}
        >
          <PersonalDetails></PersonalDetails>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <div className="task">
            <FormattedMessage id={EnumStringKeys.CV_Task_Languages} />
          </div>
        </Accordion.Header>
        <Accordion.Body
          onEntered={() => {
            setBgrImgCV_p(imgLanguages_p);
            setBgrImgCV_l(imgLanguages_l);
            setBgrImgCVGeneralDetails_p(imgLanguages_p);
            setBgrImgCVGeneralDetails_l(imgLanguages_l);
          }}
          onExit={() => {
            setBgrImgCV_p(null);
            setBgrImgCV_l(null);
            setBgrImgCVGeneralDetails_p(null);
            setBgrImgCVGeneralDetails_l(null);
          }}
        >
          <Languages></Languages>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>
          <div className="task">
            <FormattedMessage id={EnumStringKeys.CV_Task_Summary} />
          </div>
        </Accordion.Header>
        <Accordion.Body
          onEntered={() => {
            setBgrImgCV_p(imgSummary_p);
            setBgrImgCV_l(imgSummary_l);
            setBgrImgCVGeneralDetails_p(imgSummary_p);
            setBgrImgCVGeneralDetails_l(imgSummary_l);
          }}
          onExit={() => {
            setBgrImgCV_p(null);
            setBgrImgCV_l(null);
            setBgrImgCVGeneralDetails_p(null);
            setBgrImgCVGeneralDetails_l(null);
          }}
        >
          <Summary></Summary>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

class SectionGeneralDetails extends React.Component {
  render() {
    return <SectionGeneralDetailsImp></SectionGeneralDetailsImp>;
  }
}

export default SectionGeneralDetails;
