import React from "react";
import AllCars from "../Buttons/AllCars";
import { useTranslation } from "react-i18next";

const Global = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#111219] py-20">
      <div className="container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row justify-center items-center lg:gap-10">
        <div className="lg:w-1/2 xs:w-full">
          <iframe
            className="w-full h-[515px] rounded-md lg:h-[450px]"
            width="660"
            height="515"
            src="https://www.youtube.com/embed/OggS0F7vAVs?si=gmLCnRxHv78rt2EP"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="lg:w-1/2 lg:pl-10">
          <h4 className="text-gray-100 text-[35px] lg:text-5xl font-normal mb-4">
            {t("global")}
          </h4>
          <p className="text-gray-300 text-[19px] ">{t("globalText")}</p>
          <div className="mt-6">
            <AllCars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Global;
