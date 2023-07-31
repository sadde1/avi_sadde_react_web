import React from "react";
import GlobalProvider from "../services/GlobalProvider";
import ScreenSplash from "./ScreenSplash";
import ScreenHome from "./ScreenHome";
import ScreenCV from "./CV/ScreenCV";
import ScreenGallery from "./Gallery/ScreenGallery";
import ScreenContact from "./Contact/ScreenContact";
import ScreenLinks from "./Links/ScreenLinks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { langLocale, langMessages } from "../lang/lang";
import "../Styles/App.css";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <IntlProvider locale={langLocale} messages={langMessages}>
          <GlobalProvider>
            <div className="appmain bg-black overflow-auto p-0 m-0">
              <Routes>
                <Route path="/" element={<ScreenSplash />} />
                <Route path="/home" element={<ScreenHome />} />
                <Route path="/cv" element={<ScreenCV />} />
                <Route path="/gallery" element={<ScreenGallery />} />
                <Route path="/contact" element={<ScreenContact />} />
                <Route path="/links" element={<ScreenLinks />} />
              </Routes>
            </div>
          </GlobalProvider>
        </IntlProvider>
      </Router>
    </React.StrictMode>
  );
}

export default App;
