import { Collapse } from "antd";
import React from "react";
import "./Faq.css";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();

  const items = [
    {
      key: "1",
      label: t("faq.rowOne.title"),
      children: <p>{t("faq.rowOne.description")}</p>,
    },
    {
      key: "2",
      label: t("faq.rowTwo.title"),
      children: <p>{t("faq.rowTwo.description")}</p>,
    },
    {
      key: "3",
      label: t("faq.rowThree.title"),
      children: <p>{t("faq.rowThree.description")}</p>,
    },
    {
      key: "4",
      label: t("faq.rowFour.title"),
      children: <p>{t("faq.rowFour.description")}</p>,
    },
    {
      key: "5",
      label: t("faq.rowFive.title"),
      children: <p>{t("faq.rowFive.description")}</p>,
    },
  ];
  return (
    <div className="bg-[#1e1f27] py-10">
      <div className="faq container">
        <div className="faq-box ">
          <div className="faq-title">
            <h3>FAQ</h3>
          </div>
          <div className="faq-item_box w-[100%]">
            <Collapse accordion items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
