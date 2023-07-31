import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { isRTL } from "../lang/lang";
import { useGlobalContext } from "../services/GlobalProvider";
import "../Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imgBackRTL from "../assets/images/Common/baseline_arrow_forward_ios_inverted_24dp.png";
import imgBackLTR from "../assets/images/Common/baseline_arrow_back_ios_new_inverted_24dp.png";

export default function NavBar(_props) {
  const navigate = useNavigate();
  const {
    setBgrImgCV_p,
    setBgrImgCV_l,
    setBgrImgCVGeneralDetails_p,
    setBgrImgCVGeneralDetails_l,
    setBgrImgCVWorkExperience_p,
    setBgrImgCVWorkExperience_l,
    setBgrImgCVEducation_p,
    setBgrImgCVEducation_l,
    setBgrImgContact_p,
    setBgrImgContact_l,
    setBgrImgContactConnection_p,
    setBgrImgContactConnection_l,
    setBgrImgLinks_p,
    setBgrImgLinks_l,
    setBgrImgLinksProfessional_p,
    setBgrImgLinksProfessional_l,
    setBgrImgLinksPersonal_p,
    setBgrImgLinksPersonal_l,
  } = useGlobalContext();

  return (
    <div className="bg-dark align-items-center m-0 p-0 bg-opacity-25">
      <Stack gap={2} direction="horizontal">
        <Button
          variant="link"
          className="btn btn-dark btn-sm"
          onClick={() => {
            setBgrImgCV_p(null);
            setBgrImgCV_l(null);
            setBgrImgCVGeneralDetails_p(null);
            setBgrImgCVGeneralDetails_l(null);
            setBgrImgCVWorkExperience_p(null);
            setBgrImgCVWorkExperience_l(null);
            setBgrImgCVEducation_p(null);
            setBgrImgCVEducation_l(null);
            setBgrImgContact_p(null);
            setBgrImgContact_l(null);
            setBgrImgContactConnection_p(null);
            setBgrImgContactConnection_l(null);
            setBgrImgLinks_p(null);
            setBgrImgLinks_l(null);
            setBgrImgLinksProfessional_p(null);
            setBgrImgLinksProfessional_l(null);
            setBgrImgLinksPersonal_p(null);
            setBgrImgLinksPersonal_l(null);
            navigate(-1);
          }}
        >
          <Image
            src={isRTL ? imgBackRTL : imgBackLTR}
            className="img-fluid blend "
            style={{ "background-color": _props._color }}
          />
        </Button>
        <div className="apptitle" style={{ color: _props._color }}>
          <FormattedMessage id={_props._title} />
        </div>
      </Stack>
    </div>
  );
}
