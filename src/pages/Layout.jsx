import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEn from "../assets/locale/translationsEn";
import translationsUz from "../assets/locale/translationsUz";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    uz: { translation: translationsUz },
  },
  lng: "uz",
  fallbackLng: "en",
});

const Layout = () => {
  const changeLang = (value) => {
    i18n.changeLanguage(value);
  };
  return (
    <div>
      <div>
        <Navbar changeLang={changeLang} />
      </div>
      <main>
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
