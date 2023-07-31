import React from "react";
import Stack from "react-bootstrap/Stack";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import { EnumURLs_Links_Phones } from "../../services/URLs_Links_Phones";
import "../../Styles/App.css";
import "../../Styles/ScreenCV.css";
import "bootstrap/dist/css/bootstrap.min.css";

class PersonalDetails extends React.Component {
  render() {
    return (
      <Stack direction="vertical">
        <div className="content px-3">
          <div className="content px-3">
            <FormattedMessage id={EnumStringKeys.CV_Personal_Address} />
          </div>
          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.CV_Personal_Phone} />

            <a href={EnumURLs_Links_Phones.cellnumlong} className="linkto">
              <FormattedMessage id={EnumStringKeys.CV_Personal_Phone_Number} />
            </a>
          </div>
          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.CV_Personal_Email} />
            <a href={EnumURLs_Links_Phones.emailurllong} className="linkto">
              {EnumURLs_Links_Phones.emailurlshort}
            </a>
          </div>
          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.CV_Personal_WEB} />
            <a
              className="linkto"
              href={EnumURLs_Links_Phones.weburllong}
              target="_blank"
              rel="noreferrer"
            >
              {EnumURLs_Links_Phones.weburlshort}
            </a>
          </div>
        </div>
      </Stack>
    );
  }
}

export default PersonalDetails;
