import React from "react";
import Stack from "react-bootstrap/Stack";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import { EnumURLs_Links_Phones } from "../../services/URLs_Links_Phones";
import "../../Styles/App.css";
import "../../Styles/ScreenContact.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Messaging extends React.Component {
  render() {
    return (
      <Stack direction="vertical">
        <div className="content px-3">
          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.Contact_Email} />
            <a href={EnumURLs_Links_Phones.emailurllong} className="linkto">
              {EnumURLs_Links_Phones.emailurlshort}
            </a>
          </div>
          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.Contact_Whatsapp} />
            <a className="linkto" href={EnumURLs_Links_Phones.whatsapplong}>
              <FormattedMessage
                id={EnumStringKeys.Contact_Cellular_Phone_Number}
              />
            </a>
          </div>
        </div>
      </Stack>
    );
  }
}

export default Messaging;
