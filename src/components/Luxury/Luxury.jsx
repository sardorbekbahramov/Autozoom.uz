import React from "react";
import { useTranslation } from "react-i18next";

const Luxury = () => {
  const { t } = useTranslation();
  return (
    <div className="py-[70px] bg-[#272933]">
      <div className="container">
        <div>
          <h4 className="xs:text-[35px] text-gray-100 xs:font-normal md:text-[40px] md:font-bold">
            {t("luxury")}
          </h4>
          <p className="xs:text-[17px] md:text-[20px] text-gray-300 font-normal">
            {t("luxuryText")}
          </p>
        </div>
        <div>
          <h4 className="xs:text-[35px] text-gray-100 xs:font-normal md:text-[40px] md:font-bold">
            {t("luxuryDubai")}
          </h4>
          <p className="xs:text-[17px] md:text-[20px] text-gray-300 font-normal">
            {t("luxuryDubaiText")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
