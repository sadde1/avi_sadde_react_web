import React from "react";
import Stack from "react-bootstrap/Stack";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import { EnumURLs_Links_Phones } from "../../services/URLs_Links_Phones";
import "../../Styles/App.css";
import "../../Styles/ScreenLinks.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Web extends React.Component {
  render() {
    return (
      <Stack direction="vertical">
        <div className="content px-3">
          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.Links_Github} />
            <a
              href={EnumURLs_Links_Phones.githublong}
              className="linkto"
              target="_blank"
              rel="noreferrer"
            >
              {EnumURLs_Links_Phones.githubshort}
            </a>
          </div>
          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.Links_Linkedin} />
            <a
              href={EnumURLs_Links_Phones.linkedinlong}
              className="linkto"
              target="_blank"
              rel="noreferrer"
            >
              {EnumURLs_Links_Phones.linkedinshort}
            </a>
          </div>
          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.Links_WEB} />
            <a
              href={EnumURLs_Links_Phones.weburllong}
              className="linkto"
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

export default Web;
