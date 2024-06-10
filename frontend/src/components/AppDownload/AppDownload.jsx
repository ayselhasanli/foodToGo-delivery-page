import React from 'react'
import "./AppDownload.css"
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="appDownload">
      <h2>For Better Experience Download FoodToGo App!</h2>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="play-store-app" />
        <img src={assets.app_store} alt="app-store-app" />
      </div>
    </div>
  );
}

export default AppDownload
