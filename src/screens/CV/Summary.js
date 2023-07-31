import React from "react";
import Stack from "react-bootstrap/Stack";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import "../../Styles/App.css";
import "../../Styles/ScreenCV.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Summary extends React.Component {
  render() {
    return (
      <Stack direction="vertical">
        <div className="content px-3">
          <div className="content px-3">
            <FormattedMessage id={EnumStringKeys.CV_Summary_27_Years_Long} />
          </div>
          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.CV_Summary_Self_Study} />
          </div>
          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.CV_Summary_Human_Debugger} />
          </div>
          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.CV_Summary_Appreciated} />
          </div>
        </div>
      </Stack>
    );
  }
}

export default Summary;
