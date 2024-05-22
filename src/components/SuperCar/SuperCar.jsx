import React from "react";
import superCars from "../../assets/images/superCars.jpg";
import AllCars from "../Buttons/AllCars";
import { useTranslation } from "react-i18next";

const SuperCar = () => {
  const { t } = useTranslation();
  return (
    <div className="xs:py-[50px] py:my-[100px] bg-[#111219]">
      <div className="container  md:flex xs:flex-grow justify-center items-center gap-10">
        <div className="w-full">
          <img src={superCars} className="rounded-md" alt="" />
        </div>
        <div className="w-full">
          <h4 className="text-[35px] text-gray-100 font-bold">
            {t("superCar")}
          </h4>
          <p className="text-[20px] text-gray-300 font-normal">
            {t("superCartext")}
          </p>
          <AllCars />
        </div>
      </div>
    </div>
  );
};

export default SuperCar;
