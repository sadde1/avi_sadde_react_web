import React from "react";
import Stack from "react-bootstrap/Stack";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import "../../Styles/App.css";
import "../../Styles/ScreenCV.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Technion extends React.Component {
  render() {
    return (
      <Stack direction="vertical">
        <div className="content px-3">
          <div className="px-3">
            <div className="cvfloat textbold">
              <FormattedMessage id={EnumStringKeys.CV_Technion_BSc} />
            </div>
            <div>
              <span>&nbsp;</span>
              <FormattedMessage
                id={EnumStringKeys.CV_Technion_Specialization}
              />
            </div>
          </div>

          <div className="content px-3 mt-3 text-decoration-underline">
            <FormattedMessage id={EnumStringKeys.CV_Technion_Faculty} />
          </div>
          <div className="content px-3">
            <FormattedMessage id={EnumStringKeys.CV_Technion_Courses} />
          </div>

          <div className="content px-3 mt-3 text-decoration-underline">
            <FormattedMessage id={EnumStringKeys.CV_Technion_Project} />
          </div>
          <div className="px-3">
            <div className="content cvfloat">
              <FormattedMessage
                id={EnumStringKeys.CV_Technion_Project_Spooler}
              />
            </div>
          </div>
          <div className="content textbold">
            <span>&nbsp;</span>
            <FormattedMessage id={EnumStringKeys.CV_Technion_Project_Grade} />
          </div>

          <div className="content px-3">
            <FormattedMessage id={EnumStringKeys.CV_Technion_Project_Desc} />
          </div>
        </div>
      </Stack>
    );
  }
}

export default Technion;
