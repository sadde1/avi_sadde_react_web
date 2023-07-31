import React from "react";
import Stack from "react-bootstrap/Stack";
import { FormattedMessage } from "react-intl";
import { EnumStringKeys } from "../../lang/stringKeys";
import "../../Styles/App.css";
import "../../Styles/ScreenCV.css";
import "bootstrap/dist/css/bootstrap.min.css";

function BosmatProj() {
  return (
    <span>
      &nbsp;
      <span>
        <FormattedMessage id={EnumStringKeys.CV_Bosmat_Project_2} />
      </span>
      <span className="cvltr textbold">
        <FormattedMessage id={EnumStringKeys.CV_Bosmat_Project_Grade} />
      </span>
    </span>
  );
}
class Bosmat extends React.Component {
  render() {
    return (
      <Stack direction="vertical">
        <div className="content px-3">
          <div className="px-3">
            <div className="cvfloat textbold">
              <FormattedMessage
                id={EnumStringKeys.CV_Bosmat_Practical_Electrical_Engineering}
              />
            </div>
            <div>
              <span>&nbsp;</span>
              <FormattedMessage
                id={EnumStringKeys.CV_Bosmat_Excellent_Student}
              />
            </div>
          </div>

          <div className="px-3 mt-3">
            <div className="cvfloat text-decoration-underline">
              <FormattedMessage id={EnumStringKeys.CV_Bosmat_Project_1} />
            </div>
            <BosmatProj></BosmatProj>
          </div>
        </div>
        <div className="task mt-4">
          <FormattedMessage id={EnumStringKeys.CV_Bosmat_Bagrut} />
        </div>
      </Stack>
    );
  }
}

export default Bosmat;
