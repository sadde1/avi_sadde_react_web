import React from "react";
import Stack from "react-bootstrap/Stack";
import Accordion from "react-bootstrap/Accordion";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import { useGlobalContext } from "../../services/GlobalProvider";
import NavBar from "../NavBar";
import SectionConnection from "./SectionConnection";
import "../../Styles/App.css";
import "../../Styles/ScreenContact.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ScreenContactImp() {
  const {
    bgrImgContact_p,
    bgrImgContact_l,
    setBgrImgContact_p,
    setBgrImgContact_l,
    bgrImgContactConnection_p,
    bgrImgContactConnection_l,
  } = useGlobalContext();

  return (
    <Stack
      direction="vertical"
      className="bg-dark row m-0 p-0 overflow-auto z_front"
    >
      <NavBar
        _title={EnumStringKeys.Contact_Title}
        _color={getComputedStyle(document.documentElement).getPropertyValue(
          "--contact_tint"
        )}
      ></NavBar>

      <div className="m-0 p-0 bg-black z_back">
        <div className="m-0 p-0 z_front">
          <Accordion className="bg-transparent" defaultActiveKey="14" flush>
            <Accordion.Item eventKey="14">
              <Accordion.Header>
                <div className="section contactcolor">
                  <FormattedMessage
                    id={EnumStringKeys.Contact_Section_Connection}
                  />
                </div>
              </Accordion.Header>
              <Accordion.Body
                onEntered={() => {
                  setBgrImgContact_p(bgrImgContactConnection_p);
                  setBgrImgContact_l(bgrImgContactConnection_l);
                }}
                onExit={() => {
                  setBgrImgContact_p(null);
                  setBgrImgContact_l(null);
                }}
              >
                <SectionConnection></SectionConnection>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <picture>
          <source media="(orientation: landscape)" srcset={bgrImgContact_l} />
          <source className="imgbgr z_back" srcset={bgrImgContact_p} />
          <img className="imgbgr z_back" src={bgrImgContact_p} alt=""></img>
        </picture>
      </div>
    </Stack>
  );
}
class ScreenContact extends React.Component {
  render() {
    return <ScreenContactImp></ScreenContactImp>;
  }
}

export default ScreenContact;
