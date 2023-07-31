import React from "react";
import Stack from "react-bootstrap/Stack";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import "../../Styles/App.css";
import "../../Styles/ScreenCV.css";
import "bootstrap/dist/css/bootstrap.min.css";

class SanDisk extends React.Component {
  render() {
    return (
      <Stack direction="vertical">
        <div className="content px-3">
          <div className="content px-3 textbold">
            <FormattedMessage id={EnumStringKeys.CV_SanDisk_Insight} />
          </div>
          <div className="content px-3 mt-3">
            <FormattedMessage
              id={EnumStringKeys.CV_SanDisk_Insight_Development}
            />
          </div>
          <div className="content px-3 mt-3">
            <FormattedMessage
              id={EnumStringKeys.CV_SanDisk_Insight_Application}
            />
          </div>
          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.CV_SanDisk_Insight_Clients} />
          </div>
          <div className="content px-3 mt-4 textbold">
            <FormattedMessage id={EnumStringKeys.CV_SanDisk_Oscar} />
          </div>
          <div className="content px-3 mt-3">
            <FormattedMessage
              id={EnumStringKeys.CV_SanDisk_Oscar_Development}
            />
          </div>
          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.CV_SanDisk_Oscar_GUI} />
          </div>
          <div className="content px-3 mt-4 textbold">
            <FormattedMessage id={EnumStringKeys.CV_SanDisk_Scripter} />
          </div>
          <div className="content px-3 mt-3">
            <FormattedMessage
              id={EnumStringKeys.CV_SanDisk_Scripter_Development}
            />
          </div>
          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.CV_SanDisk_Scripter_System} />
          </div>
          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.CV_SanDisk_Scripter_GUI} />
          </div>
          <div className="content px-3 mt-3">
            <FormattedMessage id={EnumStringKeys.CV_SanDisk_Scripter_Work} />
          </div>
          <div className="content px-3 mt-3 fst-italic">
            <FormattedMessage id={EnumStringKeys.CV_SanDisk_Scripter_Use} />
          </div>
        </div>
      </Stack>
    );
  }
}

export default SanDisk;
