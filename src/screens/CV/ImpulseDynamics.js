import React from "react";
import Stack from "react-bootstrap/Stack";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import "../../Styles/App.css";
import "../../Styles/ScreenCV.css";
import "bootstrap/dist/css/bootstrap.min.css";

class ImpulseDynamics extends React.Component {
  render() {
    return (
      <Stack direction="vertical">
        <div className="content px-3">
          <div className="content px-3">
            <FormattedMessage
              id={EnumStringKeys.CV_ImpulseDynamics_Development}
            />
          </div>
          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.CV_ImpulseDynamics_Env} />
          </div>
        </div>
      </Stack>
    );
  }
}

export default ImpulseDynamics;
