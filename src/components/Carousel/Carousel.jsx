import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { RightCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import "./style.css";

import { Link, useNavigate } from "react-router-dom";

export default function Carousel() {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const urlimg = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://autoapi.dezinfeksiyatashkent.uz/api/cars"
        );
        setCars(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching car data:", error);
        setCars([]);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const groupCarsByCategory = (cars) => {
    const groupedCars = {};

    cars.forEach((car) => {
      const categoryId = car?.category?.id;

      if (!groupedCars[categoryId]) {
        groupedCars[categoryId] = {
          categoryName: car?.category?.name_en,
          cars: [],
        };
      }

      groupedCars[categoryId]?.cars?.push(car);
    });

    return groupedCars;
  };

  const groupedCars = groupCarsByCategory(cars);

  if (isLoading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  const handleToCars = (id) => {
    navigate(`/carsinfo/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="Carousel bg-[#272933]">
      <div className="container">
        {Object.keys(groupedCars).map((categoryId) => (
          <div key={categoryId}>
            <div className="flex justify-between p-[20px]">
              <h2 className="text-white text-3xl font-light">
                {groupedCars[categoryId]?.categoryName.toUpperCase()} RENTAL
                DUBAI
              </h2>
              <Link to={"/cars"} className="flex text-white cursor-pointer">
                <p className="text-white text-xl font-light mr-2">SEE ALL</p>
                <div className="text-xl">
                  <RightCircleOutlined />
                </div>
              </Link>
            </div>

            <Swiper slidesPerView={3} spaceBetween={30}>
              {groupedCars[categoryId]?.cars.map((car, index) => (
                <SwiperSlide
                  className=" rounded-3xl  hover:bg-gradient-to-br from-gray-600 to-gray-900 cursor-pointer "
                  onClick={() => handleToCars(car?.id)}
                >
                  <div>
                    <img
                      className="carpousel-img"
                      src={`${urlimg}${car.car_images[0]?.image.src}`}
                      alt={car.category.name_en}
                    />
                    <h5 className="text-white text-xl font-light pb-4">
                      {car.brand.title} {car.model.name}
                    </h5>
                    <hr className="border-white pb-5" />
                    <h3 className="text-white text-xl font-light pb-4">
                      <span>AED {car.price_in_aed}</span>{" "}
                      <span className="text-gray-500">
                        / $ {car.price_in_usd}
                      </span>
                      <span>AED {car.price_in_aed}</span>{" "}
                      <span className="text-gray-500">
                        / $ {car.price_in_usd}
                      </span>
                    </h3>
                    <p className="text-white text-[15px] font-light">per day</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
}
