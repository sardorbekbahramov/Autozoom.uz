import React, { useState, useEffect } from "react";
import { IoMenuSharp, IoCloseSharp, IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import navLogo from "../../assets/icons/autozoom.svg";
import engFlag from "../../assets/images/engFlagg.jpg";
import rusFlag from "../../assets/images/russianFlag.png";
import { useTranslation } from "react-i18next";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import axios from "axios";

const Navbar = ({ changeLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [brands, setBrands] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  const { t } = useTranslation();
  const urlimg = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";

  useEffect(() => {
    getBrands();
  });

  const getBrands = () => {
    axios
      .get("https://autoapi.dezinfeksiyatashkent.uz/api/brands")
      .then((response) => {
        setBrands(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const changeLangHandler = (e) => {
    changeLang(e.target.value);
  };

  return (
    <div className="bg-[#111219]">
      <div className="container flex justify-between items-center">
        <div className="flex justify-center items-center gap-5 top-0 ">
          <span
            onClick={changeLangHandler}
            className="flex justify-center items-center  gap-3"
          >
            <button onClick={() => changeLang("uz")}>
              <img
                src={rusFlag}
                className="w-9 h-6 cursor-pointer rounded-md"
                alt="Russian"
              />
            </button>
            <button onClick={() => changeLang("en")}>
              <img
                src={engFlag}
                className="w-9 h-6 cursor-pointer rounded-md"
                alt="English"
              />
            </button>
          </span>
          <div className="w-[350px] hidden md:block">
            <span className="block">
              <label className="relative">
                <IoSearchSharp
                  color="white"
                  className="top-[-20px] w-[22px]  h-10 left-2  absolute z-10"
                />
                <input
                  className="bg-gradient-to-r top-[-20px] text-white font-bold text-[17px]  sm:px-10 py-10 sm:py-2 text-base sm:text-[15px] absolute from-slate-600 rounded-md h-[40px] sm:w-[300px] to-gray-900"
                  type="text"
                  placeholder="Search"
                />
              </label>
            </span>
          </div>
        </div>
        <div className="block">
          <Link to="/">
            <img
              src={navLogo}
              className="lg:w-48 lg:h-48 md:w-44 md:h-44  sm:w-40 sm:h-40 ss:w-36 ss:h-36 xs:w-32 xs:h-32   object-fill  "
              alt="Autozoom"
            />
          </Link>
        </div>
        <div className="flex items-center">
          {/* Burger menu */}
          <div className="relative">
            <div
              className="block md:hidden cursor-pointer"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <IoCloseSharp color="white" className="w-[40px] h-[40px]" />
              ) : (
                <IoMenuSharp color="white" className="w-[40px] h-[40px]" />
              )}
            </div>
            {/* Burger menu uchun */}
          </div>
          {/* Asosiy menu uchun */}
          <div className="hidden md:flex flex-col md:flex-row gap-4">
            <ul className="flex items-center gap-4">
              <li>
                <Link
                  className="md:text-[17px]  text-gray-100  hover:text-red-500"
                  to="/cars"
                >
                  {t("cars")}
                </Link>
              </li>
              <li>
                <Link
                  className="md:text-[17px] text-gray-100  hover:text-red-500"
                  to="/"
                >
                  <Dropdown
                    placement="bottom"
                    overlay={
                      <ul className="grid grid-cols-3 gap-4 bg-[#111219] rounded-xl p-5">
                        {brands.map((brand) => (
                          <li key={brand.id}>
                            <Link
                              className="text-[27px] md:text-[30px] text-white flex items-center gap-x-3 hover:text-red-500"
                              to={`/cars/brand/${brand.id}`}
                            >
                              <img
                                src={urlimg + brand.image_src}
                                className="w-5 h-5 m-0"
                                alt=""
                              />
                              <p className="m-0">{brand.title}</p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    }
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space className="md:text-[17px]  text-gray-100  hover:text-red-500">
                        {t("brand")}
                      </Space>
                    </a>
                  </Dropdown>
                </Link>
              </li>
              <li>
                <Link
                  className="md:text-[17px] text-gray-100  hover:text-red-500"
                  to="/"
                >
                  {t("service")}
                </Link>
              </li>
            </ul>
            <ul className="flex gap-4">
              <li>
                <Link
                  className="md:text-[17px] text-gray-100 hover:text-red-500"
                  to="/aboutUs"
                >
                  {t("aboutUs.nav")}
                </Link>
              </li>
              <li>
                <Link
                  className="md:text-[17px] text-gray-100  hover:text-red-500"
                  to="/contact"
                >
                  {t("contacts.nav")}
                </Link>
              </li>
              <li>
                <Link
                  className="md:text-[17px]  text-gray-100  hover:text-red-500"
                  to="/blog"
                >
                  {t("blogs")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-black w-[350px] p-[20px] h-[100vh] fixed top-0 z-50 right-0`}
      >
        <button className=" block md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <IoCloseSharp color="white" className="w-[40px] h-[40px]" />
          ) : (
            <IoMenuSharp color="white" className="w-[40px] h-[40px]" />
          )}
        </button>
        <ul className="flex flex-col gap-4">
          <li>
            <Link
              className="text-[27px] md:text-[30px] text-white  hover:text-red-600"
              to="/"
            >
              Cars
            </Link>
          </li>
          <li>
            
            <Dropdown
              overlay={
                <ul className="flex flex-col gap-4">
                  {brands.map((brand) => (
                    <li key={brand.id}>
                      <Link
                        className="text-[27px] md:text-[30px] text-white  hover:text-red-600"
                        to={`/brand/${brand.id}`}
                      >
                        {brand.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              }
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Brand
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </li>
          <li>
            <Link
              className="text-[27px] md:text-xl text-white  hover:text-red-300"
              to="/"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="text-[27px] md:text-xl text-white  hover:text-red-300"
              to="/aboutUs"
              onClick={handleLinkClick}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="text-[27px] md:text-xl text-white  hover:text-red-300"
              to="/contact"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="text-[27px] md:text-xl text-white  hover:text-red-300"
              to="/blog"
              onClick={handleLinkClick}
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
