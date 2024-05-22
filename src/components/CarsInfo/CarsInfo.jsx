import { Col, Row, message } from 'antd'
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './style.css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CiCalendar } from "react-icons/ci";
import { CiAlarmOn } from "react-icons/ci";
import { IoMdSpeedometer } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { IoColorPaletteOutline } from "react-icons/io5";
import { PiEngine } from "react-icons/pi";
import { GiGasPump } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import automatik from '../../assets/icons/automat.svg'
import wheel from '../../assets/icons/whel.svg'
import SimilarCars from './SimilarCars';

export default function CarsInfo() {
    const { id } = useParams();
    const urlimg = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";
    const [cars, setcars] = useState([])
    const [loading, setLoading] = useState(false);
    const getCars = () => {
        axios
            .get(`https://autoapi.dezinfeksiyatashkent.uz/api/cars/${id}`)
            .then((response) => {
                const carData = response?.data?.data;
                if (carData && typeof carData === 'object') {
                    // Convert object to array with a single item
                    setcars([carData]);
                } else {
                    setcars([]); // Set empty array if response is not as expected
                }
            })
            .catch((err) => {
                console.log(err);
                setOneCar([]);
            });
    }
    useEffect(() => {
        getCars();
        console.log(cars);
    }, [id]);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const sendMessage = async (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const period = document.getElementById("period").value;
        const detail = document.getElementById("detail").value;

        if (!name || !phone || !period || !detail) {
            message.error("Formani to'ldiring.");
            return;
        }

        setLoading(true);

        const token = "7166835479:AAGoURx4dH-h52x_sWqqf1nxEo6ikMgsxqA";
        const chat_id = -1002053357956;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const messageContent = `Ismi: ${name}\nTelefon raqami: ${phone}\nPeriod: ${period}\nDetail: ${detail}`;

        try {
            await axios.post(url, {
                chat_id: chat_id,
                text: messageContent,
            });
            message.success("Message sent successfully!");
            document.getElementById("myForm").reset();
        } catch (error) {
            message.error("Failed to send message. Please try again later.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className='container'>
            {cars &&
                cars.map((item, index) => (
                    <h2 key={index} className='text-5xl text-white pb-8 pt-6 font-bold'> {item?.brand?.title} {item?.model?.name}</h2>
                ))}

            <Row>
                <Col md={13}>
                    <Row>
                        <Col md={5}>
                            <Swiper
                                onClick={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={4}
                                direction={'vertical'}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                            >
                                {cars &&
                                    cars.map((item, index) => (
                                        <div key={index}>
                                            {
                                                item.car_images.map((item, index) => (
                                                    <SwiperSlide key={index} className='cars-swiper'>
                                                        <img src={`${urlimg}${item?.image?.src}`} alt={`Car ${index}`} />
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </div>

                                    ))}
                            </Swiper>
                        </Col>
                        <Col md={19}>
                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',
                                }}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                {cars &&
                                    cars.map((item, index) => (
                                        <div key={index}>
                                            {
                                                item.car_images.map((item, index) => (
                                                    <SwiperSlide key={index} className='cars-swiper-two'>
                                                        <img src={`${urlimg}${item?.image?.src}`} alt={`Car ${index}`} />
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </div>

                                    ))}
                            </Swiper>
                        </Col>
                        {cars &&
                            cars.map((item, index) => (
                                <div className='w-[80%]' key={index}>
                                    <h3 className='text-3xl text-white mb-8 font-bold'> Good to know about {item?.brand?.title} {item.model.name}</h3>
                                    <p className='text-gray-500 text-[13px]'>Kilometrage limit per day</p>
                                    <h4 className='text-xl text-white font-bold pb-5'> {item?.limitperday} (Every extra km will be charged 20 AED/km)</h4>
                                    <p className='text-gray-500 text-[13px]'>Car rental deposit amount</p>
                                    <h4 className='text-xl text-white font-bold'> {item?.limitperday} (Every extra km will be charged 20 AED/km)</h4>
                                </div>
                            ))}

                    </Row>
                </Col>
                <Col md={11}>
                    {cars &&
                        cars.map((item, index) => (
                            <div key={index}> 
                                <div >
                                    <div className='flex justify-between'>
                                        <div>
                                            <h3 className="text-white text-2xl font-bold  "><span>AED {item?.price_in_aed}</span> <span className="text-gray-500">/ $ {item?.price_in_usd}</span></h3>
                                            <p className='text-gray-500 text-[13px]'>per day</p>
                                            <h3 className="text-white text-xl  "><del><span>AED</span> <span className="text-gray-500">/ $ </span></del></h3>
                                        </div>
                                        <div>
                                            <p className=' text-[15px]   text-gray-500'>Deposit</p>
                                            <p className='pb-6'></p>
                                            <p className='text-gray-500 text-[13px]'>Premium protection</p>
                                        </div>
                                        <div>
                                            <h4 className='text-white text-xl font-bold  '>AED 0</h4>
                                            <p className='text-gray-500 text-[13px] pb-3'>AED 0 for credit cards payment</p>
                                            <h3 className="text-white text-xl font-bold  "><span>AED {item?.price_in_aed}</span></h3>
                                            <p className='text-gray-500 text-[13px]'>AED {item?.price_in_aed} price for 1 day</p>
                                        </div>

                                    </div>
                                    <hr className='text-gray-500' />
                                </div>

                                <div className='pt-8'>
                                    <div className='flex justify-between'>
                                        <div className='w-[30px]'>
                                            <span className='text-2xl text-gray-500 '><CiCalendar /> </span>
                                            <p className='mt-2'> {item?.year}</p>
                                        </div>
                                        <div className='w-[30px] mt-[-20px]'>
                                            <span className='text-gray-500 text-[10px]'>0-100</span>
                                            <span className='text-2xl text-gray-500 '>< CiAlarmOn /></span>
                                            <p className='ml-2'> {item?.seconds}</p>
                                        </div>
                                        <div className='w-[30px]'>
                                            <span className='text-2xl text-gray-500 '><IoMdSpeedometer /></span>
                                            <p className='mt-2'> {item?.max_speed}</p>
                                        </div>
                                        <div className='w-[30px]'>
                                            <span className='text-2xl text-gray-500'><IoPersonSharp /></span>
                                            <p className='ml-[7px] mt-2'> {item?.max_people}</p>
                                        </div>
                                        <div className='w-[30px]'>
                                            <span className='text-2xl text-gray-500 '><IoColorPaletteOutline /></span>
                                            <p className='mt-2'> {item?.color}</p>
                                        </div>
                                    </div>

                                    <div className='flex justify-between mt-4'>
                                        <div className='w-[30px]'>
                                            <span className='text-2xl text-gray-500 '><PiEngine /> </span>
                                            <p className='mt-1 ml-[4px] text-[20px]'> {item?.motor}</p>
                                        </div>
                                        <div className='w-[30px]'>
                                            <span className='text-2xl text-gray-500 '><img src={automatik} alt="Error" /></span>
                                            <p className='mt-2 text-[20px]'> At</p>
                                        </div>
                                        <div className='w-[30px]'>
                                            <span className='text-2xl text-gray-500 '><img src={wheel} alt="Error" /></span>
                                            <p className='mt-2 ml-[-4px] text-[20px]'> Full</p>
                                        </div>
                                        <div className='w-[30px]'>
                                            <span className='text-2xl text-gray-500'><GiGasPump /></span>
                                            <p className='mt-2 text-[20px]'> {item?.petrol}</p>
                                        </div>
                                        <div className='w-[30px]'>
                                            <span className='text-2xl text-gray-500 '><FaCar /></span>
                                            <p className='mt-2 ml-[-20px] text-[20px]'> {item?.category?.name_en}</p>
                                        </div>
                                    </div>

                                    <hr className='text-gray-500' />
                                    <div className='flex justify-center mt-10'>
                                        <div className='flex items-center justify-center w-[100px] h-[70px] bg-green-400 rounded-2xl cursor-pointer'>
                                            <span className='text-white text-4xl'><FaWhatsapp /></span>
                                        </div>
                                        <div className='flex items-center justify-center w-[100px] h-[70px] bg-blue-500 rounded-2xl cursor-pointer ml-4'>
                                            <span className='text-white text-4xl'><FaTelegramPlane /></span>
                                        </div>
                                        <div className='flex items-center justify-center w-[100px] h-[70px] bg-yellow-500 rounded-2xl cursor-pointer ml-4'>
                                            <span className='text-white text-4xl'><FaPhoneAlt /></span>
                                        </div>

                                    </div>
                                    <div className='border border-white p-8 w-[80%] mt-10 m-auto'>
                                        <form id='myForm'>
                                            <input required type="text" className='w-full h-16 p-5 outline-none bg-gray-500 border border-gray-200 mb-4' placeholder='Name' id="name" />
                                            <input type="text" className='w-full h-16 p-5 outline-none bg-gray-500 border border-gray-200 mb-4' placeholder='Phone' id="phone" required />
                                            <input type="text" className='w-full h-16 p-5 outline-none bg-gray-500 border border-gray-200 mb-4' placeholder='Period' id="period" required />
                                            <input type="text" className='w-full h-16 p-5 outline-none bg-gray-500 border border-gray-200 mb-4' placeholder='Details' id="detail" required />
                                            <button
                                                className='w-32 h-16 bg-red-600 text-white font-bold text-xl'
                                                onClick={sendMessage}
                                                disabled={loading} // Disable button while loading
                                            >
                                                {loading ? "SENDING..." : "SEND"}
                                            </button>
                                        </form>
                                    </div>
                                    <p className='text-gray-500 text-[13px] mt-20'>The price doesn't include additional 5% VAT.</p>
                                    <p className='text-gray-500 text-[13px] '>There is a 3% transaction fee when paying by credit/debit card.</p>
                                    <p className='text-gray-500 text-[13px] '>There is a 7% transaction fee when paying with American Express.</p>
                                </div>
                            </div>
                        ))}
                </Col>
            </Row>
            <SimilarCars />
        </div>
    )
}
