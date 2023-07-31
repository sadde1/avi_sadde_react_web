import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../services/GlobalProvider";
import "../Styles/ScreenSplash.css";
import logoport from "../assets/images/Common/AviSadde800x1422port.gif";
import logoland from "../assets/images/Common/AviSadde800x450Land.gif";

function Timer() {
  const { isSplashDone, setSplashDone } = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashDone(true);
      navigate("/home", { replace: true });
    }, 3000);
    return () => clearTimeout(timer);
  });

  return;
}

class ScreenSplash extends React.Component {
  render() {
    return (
      <div className="splashcontainer">
        <Timer></Timer>
        <img
          className="splashimg"
          srcset={logoport + " 600w, " + logoland + " 800w"}
          src={logoland}
          alt="Splash"
        ></img>
      </div>
    );
  }
}
export default ScreenSplash;
