import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import { useGlobalContext } from "../../services/GlobalProvider";
import Call from "./Call";
import Messaging from "./Messaging";
import "../../Styles/App.css";
import "../../Styles/ScreenContact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imgCall_p from "../../assets/images/Contact/call_p.jpg";
import imgCall_l from "../../assets/images/Contact/call_l.jpg";
import imgMessaging_p from "../../assets/images/Contact/messaging_p.jpg";
import imgMessaging_l from "../../assets/images/Contact/messaging_l.jpg";

function SectionConnectionImp() {
  const {
    setBgrImgContact_p,
    setBgrImgContact_l,
    setBgrImgContactConnection_p,
    setBgrImgContactConnection_l,
  } = useGlobalContext();

  return (
    <Accordion className="bg-transparent" flush>
      <Accordion.Item eventKey="17">
        <Accordion.Header>
          <div className="task">
            <FormattedMessage id={EnumStringKeys.Contact_Task_Call} />
          </div>
        </Accordion.Header>
        <Accordion.Body
          onEntered={() => {
            setBgrImgContact_p(imgCall_p);
            setBgrImgContact_l(imgCall_l);
            setBgrImgContactConnection_p(imgCall_p);
            setBgrImgContactConnection_l(imgCall_l);
          }}
          onExit={() => {
            setBgrImgContact_p(null);
            setBgrImgContact_l(null);
            setBgrImgContactConnection_p(null);
            setBgrImgContactConnection_l(null);
          }}
        >
          <Call></Call>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="18">
        <Accordion.Header>
          <div className="task">
            <FormattedMessage id={EnumStringKeys.Contact_Task_Messaging} />
          </div>
        </Accordion.Header>
        <Accordion.Body
          onEntered={() => {
            setBgrImgContact_p(imgMessaging_p);
            setBgrImgContact_l(imgMessaging_l);
            setBgrImgContactConnection_p(imgMessaging_p);
            setBgrImgContactConnection_l(imgMessaging_l);
          }}
          onExit={() => {
            setBgrImgContact_p(null);
            setBgrImgContact_l(null);
            setBgrImgContactConnection_p(null);
            setBgrImgContactConnection_l(null);
          }}
        >
          <Messaging></Messaging>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

class SectionConnection extends React.Component {
  render() {
    return <SectionConnectionImp></SectionConnectionImp>;
  }
}

export default SectionConnection;
