import React from "react";
import "./AboutUs.css";
import carAbout from "../../assets/images/abou-us.png";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="aboutUs">
      <img src={carAbout} alt="carAbout" />
      <div className="container_acb aboutUs-box">
        <div className="aboutUs-top">
          <h5>{t("aboutUs.top.toptop")}</h5>
          <h2>{t("aboutUs.top.topbottom")}</h2>
        </div>
        <div className="aboutUs-middle">
          <div className="aboutUs-middle_top">
            <h3>{t("aboutUs.middle.title")}</h3>
            <p>{t("aboutUs.middle.description")}</p>
          </div>
          <div className="aboutUs-middle_middle">
            <div className="aboutUs-middle_middle--title">
              <h3>{t("aboutUs.middle.middle_m.title")}</h3>
            </div>
            <div className="aboutUs-middle_middle--description">
              <p>
                <span>
                  {t(
                    "aboutUs.middle.middle_m.middle_description_p_span.one.span"
                  )}
                </span>
                {t("aboutUs.middle.middle_m.middle_description_p_span.one.p")}
              </p>
              <p>
                <span>
                  {t(
                    "aboutUs.middle.middle_m.middle_description_p_span.two.span"
                  )}
                </span>
                {t("aboutUs.middle.middle_m.middle_description_p_span.two.p")}
              </p>

              <p>
                <span>
                  {t(
                    "aboutUs.middle.middle_m.middle_description_p_span.three.span"
                  )}
                </span>
                {t("aboutUs.middle.middle_m.middle_description_p_span.three.p")}
              </p>
              <p>
                <span>
                  {t(
                    "aboutUs.middle.middle_m.middle_description_p_span.four.span"
                  )}
                </span>
                {t("aboutUs.middle.middle_m.middle_description_p_span.four.p")}
              </p>
            </div>
          </div>
        </div>
        <div className="aboutUs-bottom">
          <div className="aboutUs-bottom_item">
            <h4>{t("aboutUs.bottom.itemOne.title")}</h4>
            <p>{t("aboutUs.bottom.itemOne.description")}</p>
          </div>
          <div className="aboutUs-bottom_item">
            <h4>{t("aboutUs.bottom.itemTwo.title")}</h4>
            <p>{t("aboutUs.bottom.itemTwo.description")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
