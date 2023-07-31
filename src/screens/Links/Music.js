import React from "react";
import Stack from "react-bootstrap/Stack";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import { EnumURLs_Links_Phones } from "../../services/URLs_Links_Phones";
import "../../Styles/App.css";
import "../../Styles/ScreenLinks.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Music extends React.Component {
  render() {
    return (
      <Stack direction="vertical">
        <div className="content px-3">
          <div className="px-3">
            <div className="content px-3 mt-3">
              <FormattedMessage id={EnumStringKeys.Links_Youtube_Eng} />

              <a
                href={EnumURLs_Links_Phones.yt_eng}
                className="linkto"
                target="_blank"
                rel="noreferrer"
              >
                <FormattedMessage id={EnumStringKeys.Links_Youtube_Eng_Link} />
              </a>
            </div>

            <div className="content px-3 mt-3">
              <FormattedMessage id={EnumStringKeys.Links_Youtube_Heb} />

              <a
                href={EnumURLs_Links_Phones.yt_heb}
                className="linkto"
                target="_blank"
                rel="noreferrer"
              >
                <FormattedMessage id={EnumStringKeys.Links_Youtube_Heb_Link} />
              </a>
            </div>
          </div>
        </div>
      </Stack>
    );
  }
}

export default Music;
