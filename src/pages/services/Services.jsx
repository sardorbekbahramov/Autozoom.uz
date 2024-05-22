import AllCars from "../../components/Buttons/AllCars";
import { useTranslation } from "react-i18next";
import img1 from "../../assets/images/servis1.jpg";
import img2 from "../../assets/images/servis2.jpg";

const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#1e1f27] py-[70px]">
      <div className="container">
        <p className="text-[18px] font-normal text-gray-600">
          Hashamatli va sport avtomobillarini ijaraga olish
        </p>
        <div className="flex justify-start flex-col md:flex-row md:space-x-6">
          <div className="md:w-1/2 p-10">
            <img src={img1} alt="servise img " />
            <h4 className="text-[24px] text-gray-100">{t("servis1Tittle")}</h4>
            <p className="text-[18px] text-gray-300">{t("servisP")}</p>
            <AllCars />
          </div>
          <div className="md:w-1/2 p-10">
            <img src={img2} alt="servise img" />
            <h4 className="text-[24px] text-gray-100">{t("servis2Tittle")}</h4>
            <p className="text-[18px] text-gray-300">{t("servis2P")}</p>
            <AllCars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
