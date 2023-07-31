import React from "react";
import Stack from "react-bootstrap/Stack";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import { EnumURLs_Links_Phones } from "../../services/URLs_Links_Phones";
import "../../Styles/App.css";
import "../../Styles/ScreenLinks.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Social extends React.Component {
  render() {
    return (
      <Stack direction="vertical">
        <div className="content px-3">
          <div className="px-3">
            <div className="content px-3 mt-3">
              <FormattedMessage id={EnumStringKeys.Links_Facebook} />

              <a
                href={EnumURLs_Links_Phones.facebooklong}
                className="linkto"
                target="_blank"
                rel="noreferrer"
              >
                {EnumURLs_Links_Phones.facebookshort}
              </a>
            </div>

            <div className="content px-3 mt-3">
              <FormattedMessage id={EnumStringKeys.Links_Instagram} />

              <a
                href={EnumURLs_Links_Phones.instagramlong}
                className="linkto"
                target="_blank"
                rel="noreferrer"
              >
                {EnumURLs_Links_Phones.instagramshort}
              </a>
            </div>

            <div className="content px-3 mt-3">
              <FormattedMessage id={EnumStringKeys.Links_Tripadvisor} />

              <a
                href={EnumURLs_Links_Phones.tripadvisorlong}
                className="linkto"
                target="_blank"
                rel="noreferrer"
              >
                {EnumURLs_Links_Phones.tripadvisorshort}
              </a>
            </div>
          </div>
        </div>
      </Stack>
    );
  }
}

export default Social;
