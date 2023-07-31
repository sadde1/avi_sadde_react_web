import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import { useGlobalContext } from "../../services/GlobalProvider";
import MyRecord from "./MyRecord";
import Vanaga from "./Vanaga";
import SanDisk from "./SanDisk";
import ImpulseDynamics from "./ImpulseDynamics";
import Elbit from "./Elbit";
import ArelNet from "./ArelNet";
import "../../Styles/App.css";
import "../../Styles/ScreenCV.css";
import "bootstrap/dist/css/bootstrap.min.css";

import imgMyRecord_p from "../../assets/images/CV/myrecord_p.jpg";
import imgMyRecord_l from "../../assets/images/CV/myrecord_l.jpg";
import imgVanaga_p from "../../assets/images/CV/vanaga_p.jpg";
import imgVanaga_l from "../../assets/images/CV/vanaga_l.jpg";
import imgSanDisk_p from "../../assets/images/CV/sandisk_p.jpg";
import imgSanDisk_l from "../../assets/images/CV/sandisk_l.jpg";
import imgImpulseDynamics_p from "../../assets/images/CV/impulsedynamics_p.jpg";
import imgImpulseDynamics_l from "../../assets/images/CV/impulsedynamics_l.jpg";
import imgElbit_p from "../../assets/images/CV/elbit_p.jpg";
import imgElbit_l from "../../assets/images/CV/elbit_l.jpg";
import imgArelNet_p from "../../assets/images/CV/arelnet_p.jpg";
import imgArelNet_l from "../../assets/images/CV/arelnet_l.jpg";

function SectionWorkExperienceImp() {
  const {
    setBgrImgCV_p,
    setBgrImgCV_l,
    setBgrImgCVWorkExperience_p,
    setBgrImgCVWorkExperience_l,
  } = useGlobalContext();
  return (
    <Accordion className="bg-transparent" flush>
      <Accordion.Item eventKey="6">
        <Accordion.Header>
          <div className="task">
            <FormattedMessage id={EnumStringKeys.CV_Task_MyRecord} />
          </div>
        </Accordion.Header>
        <Accordion.Body
          onEntered={() => {
            setBgrImgCV_p(imgMyRecord_p);
            setBgrImgCV_l(imgMyRecord_l);
            setBgrImgCVWorkExperience_p(imgMyRecord_p);
            setBgrImgCVWorkExperience_l(imgMyRecord_l);
          }}
          onExit={() => {
            setBgrImgCV_p(null);
            setBgrImgCV_l(null);
            setBgrImgCVWorkExperience_p(null);
            setBgrImgCVWorkExperience_l(null);
          }}
        >
          <MyRecord></MyRecord>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7">
        <Accordion.Header>
          <div className="task">
            <FormattedMessage id={EnumStringKeys.CV_Task_Vanaga} />
          </div>
        </Accordion.Header>
        <Accordion.Body
          onEntered={() => {
            setBgrImgCV_p(imgVanaga_p);
            setBgrImgCV_l(imgVanaga_l);
            setBgrImgCVWorkExperience_p(imgVanaga_p);
            setBgrImgCVWorkExperience_l(imgVanaga_l);
          }}
          onExit={() => {
            setBgrImgCV_p(null);
            setBgrImgCV_l(null);
            setBgrImgCVWorkExperience_p(null);
            setBgrImgCVWorkExperience_l(null);
          }}
        >
          <Vanaga></Vanaga>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="8">
        <Accordion.Header>
          <div className="task">
            <FormattedMessage id={EnumStringKeys.CV_Task_SanDisk} />
          </div>
        </Accordion.Header>
        <Accordion.Body
          onEntered={() => {
            setBgrImgCV_p(imgSanDisk_p);
            setBgrImgCV_l(imgSanDisk_l);
            setBgrImgCVWorkExperience_p(imgSanDisk_p);
            setBgrImgCVWorkExperience_l(imgSanDisk_l);
          }}
          onExit={() => {
            setBgrImgCV_p(null);
            setBgrImgCV_l(null);
            setBgrImgCVWorkExperience_p(null);
            setBgrImgCVWorkExperience_l(null);
          }}
        >
          <SanDisk></SanDisk>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="9">
        <Accordion.Header>
          <div className="task">
            <FormattedMessage id={EnumStringKeys.CV_Task_ImpulseDynamics} />
          </div>
        </Accordion.Header>
        <Accordion.Body
          onEntered={() => {
            setBgrImgCV_p(imgImpulseDynamics_p);
            setBgrImgCV_l(imgImpulseDynamics_l);
            setBgrImgCVWorkExperience_p(imgImpulseDynamics_p);
            setBgrImgCVWorkExperience_l(imgImpulseDynamics_l);
          }}
          onExit={() => {
            setBgrImgCV_p(null);
            setBgrImgCV_l(null);
            setBgrImgCVWorkExperience_p(null);
            setBgrImgCVWorkExperience_l(null);
          }}
        >
          <ImpulseDynamics></ImpulseDynamics>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="10">
        <Accordion.Header>
          <div className="task">
            <FormattedMessage id={EnumStringKeys.CV_Task_Elbit} />
          </div>
        </Accordion.Header>
        <Accordion.Body
          onEntered={() => {
            setBgrImgCV_p(imgElbit_p);
            setBgrImgCV_l(imgElbit_l);
            setBgrImgCVWorkExperience_p(imgElbit_p);
            setBgrImgCVWorkExperience_l(imgElbit_l);
          }}
          onExit={() => {
            setBgrImgCV_p(null);
            setBgrImgCV_l(null);
            setBgrImgCVWorkExperience_p(null);
            setBgrImgCVWorkExperience_l(null);
          }}
        >
          <Elbit></Elbit>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="11">
        <Accordion.Header>
          <div className="task">
            <FormattedMessage id={EnumStringKeys.CV_Task_ArelNet} />
          </div>
        </Accordion.Header>
        <Accordion.Body
          onEntered={() => {
            setBgrImgCV_p(imgArelNet_p);
            setBgrImgCV_l(imgArelNet_l);
            setBgrImgCVWorkExperience_p(imgArelNet_p);
            setBgrImgCVWorkExperience_l(imgArelNet_l);
          }}
          onExit={() => {
            setBgrImgCV_p(null);
            setBgrImgCV_l(null);
            setBgrImgCVWorkExperience_p(null);
            setBgrImgCVWorkExperience_l(null);
          }}
        >
          <ArelNet></ArelNet>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
class SectionWorkExperience extends React.Component {
  render() {
    return <SectionWorkExperienceImp></SectionWorkExperienceImp>;
  }
}

export default SectionWorkExperience;
