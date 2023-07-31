import React from "react";
import Stack from "react-bootstrap/Stack";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import { EnumURLs_Links_Phones } from "../../services/URLs_Links_Phones";
import "../../Styles/App.css";
import "../../Styles/ScreenLinks.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Projects extends React.Component {
  render() {
    return (
      <Stack direction="vertical">
        <div className="content px-3">
          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.Links_Vanaga} />
            <a
              href={EnumURLs_Links_Phones.vanagalong}
              className="linkto"
              target="_blank"
              rel="noreferrer"
            >
              {EnumURLs_Links_Phones.vanagashort}
            </a>
          </div>
          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.Links_MyRecord_0x} />
            <a
              href={EnumURLs_Links_Phones.mr0xlong}
              target="_blank"
              className="linkto"
              rel="noreferrer"
            >
              {EnumURLs_Links_Phones.mr0xshort}
            </a>
          </div>

          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.Links_MyRecord_1x} />
            <a
              href={EnumURLs_Links_Phones.mr1xAndroid}
              target="_blank"
              className="linkto linksgap"
              rel="noreferrer"
            >
              <FormattedMessage
                id={EnumStringKeys.Links_MyRecord_1x_Android_Link}
              />
            </a>
            <a
              href={EnumURLs_Links_Phones.mr1xIOS}
              target="_blank"
              className="linkto linksgap"
              rel="noreferrer"
            >
              <FormattedMessage
                id={EnumStringKeys.Links_MyRecord_1x_iOS_Link}
              />
            </a>
          </div>

          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.Links_Hive} />
            <a
              href={EnumURLs_Links_Phones.hivelong}
              className="linkto"
              target="_blank"
              rel="noreferrer"
            >
              {EnumURLs_Links_Phones.hiveshort}
            </a>
          </div>
        </div>
      </Stack>
    );
  }
}

export default Projects;
