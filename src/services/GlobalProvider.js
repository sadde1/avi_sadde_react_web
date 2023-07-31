import React from "react";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [isSplashDone, setSplashDone] = React.useState(false);

  const [bgrImgCV_p, setBgrImgCV_p] = React.useState(null);
  const [bgrImgCV_l, setBgrImgCV_l] = React.useState(null);
  const [bgrImgCVGeneralDetails_p, setBgrImgCVGeneralDetails_p] =
    React.useState(null);
  const [bgrImgCVGeneralDetails_l, setBgrImgCVGeneralDetails_l] =
    React.useState(null);
  const [bgrImgCVWorkExperience_p, setBgrImgCVWorkExperience_p] =
    React.useState(null);
  const [bgrImgCVWorkExperience_l, setBgrImgCVWorkExperience_l] =
    React.useState(null);
  const [bgrImgCVEducation_p, setBgrImgCVEducation_p] = React.useState(null);
  const [bgrImgCVEducation_l, setBgrImgCVEducation_l] = React.useState(null);
  const [bgrImgContact_p, setBgrImgContact_p] = React.useState(null);
  const [bgrImgContact_l, setBgrImgContact_l] = React.useState(null);
  const [bgrImgContactConnection_p, setBgrImgContactConnection_p] =
    React.useState(null);
  const [bgrImgContactConnection_l, setBgrImgContactConnection_l] =
    React.useState(null);
  const [bgrImgLinks_p, setBgrImgLinks_p] = React.useState(null);
  const [bgrImgLinks_l, setBgrImgLinks_l] = React.useState(null);
  const [bgrImgLinksProfessional_p, setBgrImgLinksProfessional_p] =
    React.useState(null);
  const [bgrImgLinksProfessional_l, setBgrImgLinksProfessional_l] =
    React.useState(null);
  const [bgrImgLinksPersonal_p, setBgrImgLinksPersonal_p] =
    React.useState(null);
  const [bgrImgLinksPersonal_l, setBgrImgLinksPersonal_l] =
    React.useState(null);

  return (
    <GlobalContext.Provider
      value={{
        isSplashDone,
        setSplashDone,

        bgrImgCV_p,
        bgrImgCV_l,
        setBgrImgCV_p,
        setBgrImgCV_l,
        bgrImgCVGeneralDetails_p,
        bgrImgCVGeneralDetails_l,
        setBgrImgCVGeneralDetails_p,
        setBgrImgCVGeneralDetails_l,
        bgrImgCVWorkExperience_p,
        bgrImgCVWorkExperience_l,
        setBgrImgCVWorkExperience_p,
        setBgrImgCVWorkExperience_l,
        bgrImgCVEducation_p,
        bgrImgCVEducation_l,
        setBgrImgCVEducation_p,
        setBgrImgCVEducation_l,
        bgrImgContact_p,
        bgrImgContact_l,
        setBgrImgContact_p,
        setBgrImgContact_l,
        bgrImgContactConnection_p,
        bgrImgContactConnection_l,
        setBgrImgContactConnection_p,
        setBgrImgContactConnection_l,
        bgrImgLinks_p,
        bgrImgLinks_l,
        setBgrImgLinks_p,
        setBgrImgLinks_l,
        bgrImgLinksProfessional_p,
        bgrImgLinksProfessional_l,
        setBgrImgLinksProfessional_p,
        setBgrImgLinksProfessional_l,
        bgrImgLinksPersonal_p,
        bgrImgLinksPersonal_l,
        setBgrImgLinksPersonal_p,
        setBgrImgLinksPersonal_l,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => React.useContext(GlobalContext);

export default GlobalProvider;
