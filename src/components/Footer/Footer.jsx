import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import footerLogo from "../../assets/icons/autozoom.svg";
import { FaSquareInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";
import i18next from "i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          "https://autoapi.dezinfeksiyatashkent.uz/api/categories"
        );
        const translatedCategories = response.data.data.map((item) => ({
          id: item.id,
          name_en: t(item.name_en), // Tarjima qilish
          name_ru: t(item.name_ru), // Tarjima qilish
        }));
        setCategories(translatedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategories();
  }, [t]); // `t` til o'zgarishlarida fetch qilinadi

  return (
    <div className="bg-[#111219]">
      <div className="container flex flex-col md:flex-row md:items-center">
        <div className="md:mr-10">
          <span>
            <img src={footerLogo} className="w-[170px] h-[170px]" alt="" />
          </span>
          <span>
            <h4 className="text-[25px] text-warning-100 font-semibold">
              {t("luxuryCar")}
            </h4>
            <h4 className="text-[25px] text-warning-100 font-semibold">
              {t("rental")}
            </h4>
            <h4 className="text-[25px] text-warning-100 font-semibold">
              {t("dubai")}
            </h4>
            <p className="text-[15px] text-gray-400 font-medium md:w-[250px] my-5">
              {t("rentalSport")}
            </p>
          </span>
        </div>
        {/* footer information */}
        <div className="mt-5 md:mt-0">
          <div className="flex flex-col md:flex-row justify-evenly md:items-start gap-10">
            <div>
              <h4 className="text-[20px] text-warning-100 font-semibold">
                Cars
              </h4>
              <ul>
                {categories.map((item) => (
                  <li
                    key={item.id}
                    className="text-[15px] text-gray-400 font-normal cursor-pointer"
                  >
                    <Link to={`/cars/category/${item.id}`}>
                      {i18next.language === "en" ? item.name_en : item.name_ru}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[20px] text-warning-100 font-semibold">
                Blog
              </h4>
              <h4 className="text-[20px] text-warning-100 font-semibold">
                {t("service")}
              </h4>
              <span>
                <h4 className="text-[20px] text-warning-100 font-semibold">
                  {t("contacts")}
                </h4>
                <p className="text-[15px] text-gray-400 font-normal">
                  {t("eliteSport")}
                </p>
                <p className="text-[15px] text-gray-400 font-normal">
                  <a href="+971 55 8462124">+971 55 8462124</a>
                </p>
                <p className="text-[15px] text-gray-400 font-normal">
                  {t("work")}
                </p>
              </span>
            </div>
            <div>
              <h4 className="text-[20px] text-warning-100 font-semibold">
                {t("aboutUs")}
              </h4>
              <span>
                <h4 className="text-[20px] text-warning-100 font-semibold">
                  {t("follow")}
                  <span className="flex justify-center items-center gap-3">
                    <FaSquareInstagram
                      color="gray"
                      size={35}
                      className="cursor-pointer"
                    />
                    <FaFacebook
                      color="gray"
                      size={35}
                      className="cursor-pointer"
                    />
                    <FaYoutube
                      color="gray"
                      size={35}
                      className="cursor-pointer"
                    />
                  </span>
                </h4>
              </span>
            </div>
          </div>
          <span className="w-[100px] h-[20px] bg-gray-400"></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
