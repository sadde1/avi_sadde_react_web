import React from "react";
import Stack from "react-bootstrap/Stack";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import "../../Styles/App.css";
import "../../Styles/ScreenCV.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Vanaga extends React.Component {
  render() {
    return (
      <Stack direction="vertical">
        <div className="content px-3">
          <div className="px-3">
            <div className="cvfloat text-decoration-underline">
              <FormattedMessage id={EnumStringKeys.CV_Vanaga_Independent} />
            </div>
            <div>
              <span>&nbsp;</span>
              <FormattedMessage id={EnumStringKeys.CV_Vanaga_Application} />
            </div>
          </div>

          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.CV_Vanaga_Network} />
          </div>
          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.CV_Vanaga_Env} />
          </div>
        </div>
      </Stack>
    );
  }
}

export default Vanaga;
