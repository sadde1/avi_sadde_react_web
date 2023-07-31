import React from "react";
import Stack from "react-bootstrap/Stack";
import Accordion from "react-bootstrap/Accordion";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import { useGlobalContext } from "../../services/GlobalProvider";
import NavBar from "../NavBar";
import SectionGeneralDetails from "./SectionGeneralDetails";
import SectionWorkExperience from "./SectionWorkExperience";
import SectionEducation from "./SectionEducation";
import "../../Styles/App.css";
import "../../Styles/ScreenCV.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ScreenCVImp() {
  const {
    bgrImgCV_p,
    bgrImgCV_l,
    setBgrImgCV_p,
    setBgrImgCV_l,
    bgrImgCVGeneralDetails_p,
    bgrImgCVGeneralDetails_l,
    bgrImgCVWorkExperience_p,
    bgrImgCVWorkExperience_l,
    bgrImgCVEducation_p,
    bgrImgCVEducation_l,
  } = useGlobalContext();

  return (
    <Stack
      direction="vertical"
      className="bg-dark row m-0 p-0 overflow-auto z_front"
    >
      <NavBar
        _title={EnumStringKeys.CV_Title}
        _color={getComputedStyle(document.documentElement).getPropertyValue(
          "--cv_tint"
        )}
      ></NavBar>

      <div className="m-0 p-0 bg-black z_back">
        <div className="m-0 p-0 z_front">
          <Accordion className="bg-transparent" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="section cvcolor">
                  <FormattedMessage
                    id={EnumStringKeys.CV_Section_GeneralDetails}
                  />
                </div>
              </Accordion.Header>
              <Accordion.Body
                onEntered={() => {
                  setBgrImgCV_p(bgrImgCVGeneralDetails_p);
                  setBgrImgCV_l(bgrImgCVGeneralDetails_l);
                }}
                onExit={() => {
                  setBgrImgCV_p(null);
                  setBgrImgCV_l(null);
                }}
              >
                <SectionGeneralDetails></SectionGeneralDetails>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <div className="section cvcolor">
                  <FormattedMessage
                    id={EnumStringKeys.CV_Section_WorkExperience}
                  />
                </div>
              </Accordion.Header>
              <Accordion.Body
                onEntered={() => {
                  setBgrImgCV_p(bgrImgCVWorkExperience_p);
                  setBgrImgCV_l(bgrImgCVWorkExperience_l);
                }}
                onExit={() => {
                  setBgrImgCV_p(null);
                  setBgrImgCV_l(null);
                }}
              >
                <SectionWorkExperience></SectionWorkExperience>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <div className="section cvcolor">
                  <FormattedMessage id={EnumStringKeys.CV_Section_Education} />
                </div>
              </Accordion.Header>
              <Accordion.Body
                onEntered={() => {
                  setBgrImgCV_p(bgrImgCVEducation_p);
                  setBgrImgCV_l(bgrImgCVEducation_l);
                }}
                onExit={() => {
                  setBgrImgCV_p(null);
                  setBgrImgCV_l(null);
                }}
              >
                <SectionEducation></SectionEducation>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <picture>
          <source media="(orientation: landscape)" srcset={bgrImgCV_l} />
          <source className="imgbgr z_back" srcset={bgrImgCV_p} />
          <img className="imgbgr z_back" src={bgrImgCV_p} alt=""></img>
        </picture>
      </div>
    </Stack>
  );
}
class ScreenCV extends React.Component {
  render() {
    return <ScreenCVImp></ScreenCVImp>;
  }
}

export default ScreenCV;
