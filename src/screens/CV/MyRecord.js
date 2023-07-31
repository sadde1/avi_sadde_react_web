import React from "react";
import Stack from "react-bootstrap/Stack";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import "../../Styles/App.css";
import "../../Styles/ScreenCV.css";
import "bootstrap/dist/css/bootstrap.min.css";

class MyRecord extends React.Component {
  render() {
    return (
      <Stack direction="vertical">
        <div className="content px-3">
          <div className="content textbold px-3">
            <FormattedMessage id={EnumStringKeys.CV_MyRecord_MVP_1x} />
          </div>
          <div className="content mt-1 px-3">
            <FormattedMessage id={EnumStringKeys.CV_MyRecord_MVP_1x_1} />
          </div>
          <div className="content mt-1 px-3">
            <FormattedMessage id={EnumStringKeys.CV_MyRecord_MVP_1x_2} />
          </div>
          <div className="content textbold mt-4 px-3">
            <FormattedMessage id={EnumStringKeys.CV_MyRecord_MVP_0x} />
          </div>
          <div className="content cvmyrecord mt-1 px-3">
            <FormattedMessage
              id={EnumStringKeys.CV_MyRecord_MVP_0x_Development}
            />
          </div>
          <div className="content mt-1 px-3">
            <FormattedMessage id={EnumStringKeys.CV_MyRecord_MVP_0x_1} />
          </div>
          <div className="content mt-1 px-3">
            <FormattedMessage id={EnumStringKeys.CV_MyRecord_MVP_0x_2} />
          </div>
        </div>
      </Stack>
    );
  }
}

export default MyRecord;
