import React from "react";
import Stack from "react-bootstrap/Stack";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import { EnumURLs_Links_Phones } from "../../services/URLs_Links_Phones";
import "../../Styles/App.css";
import "../../Styles/ScreenLinks.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Downloads extends React.Component {
  render() {
    return (
      <Stack direction="vertical">
        <div className="content px-3">
          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.Links_CV_Hebrew} />
            <a
              href={EnumURLs_Links_Phones.hebdoc}
              target="_blank"
              className="linkto linksgap"
              rel="noreferrer"
            >
              <FormattedMessage id={EnumStringKeys.Links_CV_Doc} />
            </a>
            <a
              href={EnumURLs_Links_Phones.hebpdf}
              target="_blank"
              className="linkto linksgap"
              rel="noreferrer"
            >
              <FormattedMessage id={EnumStringKeys.Links_CV_Pdf} />
            </a>
          </div>

          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.Links_CV_English} />
            <a
              href={EnumURLs_Links_Phones.engdoc}
              target="_blank"
              className="linkto linksgap"
              rel="noreferrer"
            >
              <FormattedMessage id={EnumStringKeys.Links_CV_Doc} />
            </a>
            <a
              href={EnumURLs_Links_Phones.engpdf}
              target="_blank"
              className="linkto linksgap"
              rel="noreferrer"
            >
              <FormattedMessage id={EnumStringKeys.Links_CV_Pdf} />
            </a>
          </div>

          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.Links_Andorid_App} />
            <a
              href={EnumURLs_Links_Phones.avisaddernandoridlong}
              target="_blank"
              className="linktoNOTYET"
              rel="noreferrer"
            >
              {EnumURLs_Links_Phones.avisaddernandoridshort}
            </a>
          </div>
        </div>
      </Stack>
    );
  }
}

export default Downloads;
