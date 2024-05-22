import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./brand.css"

const Brends = () => {
  const [brands, setBrands] = useState([]);
  const { t } = useTranslation();
  const urlimg = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";

  const getBrands = () => {
    axios
      .get("https://autoapi.dezinfeksiyatashkent.uz/api/brands")
      .then((response) => {
        setBrands(response.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <div className="py-20 bg-[#1e1f27]">
      <div className="container">
        <h4 className="text-[35px] text-gray-100 font-semibold">
          {t("BRANDS")}
        </h4>
        <div className="parent py-2- my-20 px-4 md:px-24 w-full  snap-proximity snap-x overflow-x-auto  md:grid-cols-3">
          {brands.map((item) => (
            <Link
              to={`/cars/brand/${item.id}`}
              key={item.id}
              className="brand_card bg-[#11121A] w-60 md:w-60 h-56 md:h-72 cursor-pointer mx-2 md:mx-0 snap-center flex flex-col justify-center items-center "
            >
              <div className="w-24 md:w-40 h-32 md:h-40 object-cover">
                <img
                  className="brand_img"
                  src={`${urlimg}${item.image_src}`}
                />
              </div>
              <p className="card_title text-2xl md:text-3xl text-gray-500  text-center">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brends;
