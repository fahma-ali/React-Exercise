import React from "react";
import LanguageContext from "./LanguageContext";
import { useContext } from "react";
export const LanguageUse = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const handleSwitch = () => {
    setLanguage(language === "en" ? "sp" : "en");
  };
  return (
    <div>
      <button onClick={handleSwitch}>{language ==='en' ? "Switch to Spanish" : "Switch to English"}</button>
      <h1>{ language == 'en'? 'Hello' : 'Hello!'}</h1>
    </div>
  );
};
export default LanguageUse;
