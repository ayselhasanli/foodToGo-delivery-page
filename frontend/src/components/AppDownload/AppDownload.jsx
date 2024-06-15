import React from 'react'
import "./AppDownload.css"
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="appDownload">
      <h2>For Better Experience Download FoodiA App!</h2>
      <div className="app-download-platforms">
        <a href="https://play.google.com/store/games?device=windows&pli=1">
          <img src={assets.play_store} alt="play-store-app" />
        </a>
        <a href="https://www.apple.com/app-store/">
          <img src={assets.app_store} alt="app-store-app" />
        </a>
      </div>
    </div>
  );
}

export default AppDownload
