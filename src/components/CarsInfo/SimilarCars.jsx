import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function SimilarCars() {
  const urlimg = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getCars = async () => {
      try {
        const response = await axios.get(`https://autoapi.dezinfeksiyatashkent.uz/api/cars`);
        const carData = response.data.data;
        
        if (carData && Array.isArray(carData)) {
          setCars(carData);
          setLoading(false);
        } else {
          setCars([]);
          setLoading(false);
        }
      } catch (error) {
        setError('Failed to fetch car data');
        setLoading(false);
      }
    };

    getCars();
  }, []);

  const handleToCars = (id) =>{
    navigate(`/carsinfo/${id}`)
    window.scrollTo(0,0)
  }

  return (
    <div>
      <h3 className='text-white text-2xl mt-5'>SIMILAR OFFERS</h3>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className='wrapper'>
          {cars.map((car, index) => (
            <div className="card" key={index} onClick={()=>handleToCars(car?.id)}>
              {car?.car_images?.length > 0 && (
                <div>
                  <img className='w-[100%] h-[150px]' src={`${urlimg}/${car?.car_images[0]?.image.src}`} alt={`Car ${index}`} /> 
                  <h4 className='text-white text-xl mt-8'>{car?.brand?.title} {car?.model?.name}</h4>
                  <hr className='text-white mt-3 mb-3'/>
                  <h3 className="text-white text-xl font-light pb-4">
                      <span>AED {car.price_in_aed}</span>{" "}
                      <span className="text-gray-500">
                        / $ {car.price_in_usd}
                      </span>
                    </h3>
                    <p className="text-white text-[15px] font-light">per day</p>
                </div>                        
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

