import React, { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";
import "../scss/languageSelector.scss";

const LanguageSelector = () => {
  const { locationState, locationDispatch } = useContext(LocationContext);
  const { availableLanguages, currentLanguage } = locationState;

  return (
    <div className="languageselector">
      {availableLanguages.map((language, index) => (
        <button
          className={currentLanguage === language ? "btn-active" : ""}
          onClick={() =>
            locationDispatch({
              type: "changeCurrentLanguage",
              payload: language,
            })
          }
        >
          {language}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
