import React from "react";
import { EnumStringKeys } from "../../lang/stringKeys";
import Ig from "./ig";
import NavBar from "../NavBar";
import "../../Styles/ScreenGallery.css";
import "bootstrap/dist/css/bootstrap.min.css";

class ScreenGallery extends React.Component {
  render() {
    return (
      <div className="bg-black gallerypage vw-100 vh-100 p-0 m-0">
        <Ig></Ig>
        <div className="gallerynav">
          <NavBar
            _title={EnumStringKeys.Gallery_Title}
            _color={getComputedStyle(document.documentElement).getPropertyValue(
              "--gallery_tint"
            )}
          ></NavBar>
        </div>
      </div>
    );
  }
}

export default ScreenGallery;
