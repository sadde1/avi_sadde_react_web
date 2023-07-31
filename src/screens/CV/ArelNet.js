import React from "react";
import Stack from "react-bootstrap/Stack";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import "../../Styles/App.css";
import "../../Styles/ScreenCV.css";
import "bootstrap/dist/css/bootstrap.min.css";

function IFaxText() {
  return (
    <span>
      <span className="cvltr textbold">
        <span className="cvifax cvltr fst-italic">i</span>-Fax
      </span>
      <FormattedMessage id={EnumStringKeys.CV_ArelNet_2} />
    </span>
  );
}

class ArelNet extends React.Component {
  render() {
    return (
      <Stack direction="vertical">
        <div className="content px-3">
          <div className="px-3">
            <div className="content">
              <FormattedMessage id={EnumStringKeys.CV_ArelNet_1} />
              <IFaxText></IFaxText>
            </div>
          </div>

          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.CV_ArelNet_3} />
          </div>
        </div>
      </Stack>
    );
  }
}

export default ArelNet;
