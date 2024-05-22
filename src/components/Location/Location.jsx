import axios from "axios";
import React, { useState } from "react";

const Location = () => {
  // const [location, setLocation] = useState([]);

  // const getLocation = () => {
  //   axios
  //     .get("https://autoapi.dezinfeksiyatashkent.uz/api/locations")
  //     .then((response) => {
  //       setLocation(response.data.data);
  //       console.log(response.data.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  // useEffect(() => {
  //   getLocation();
  // }, []);

  return (
    <div>
      <div className="container flex">
        <div>
          <h4 className="text-[40px] text-gray-100 font-bold">LOCATION</h4>
          {/* {location.map((Item) => (
            <ul>
              <li>{Item.name}</li>
            </ul>
          ))} */}
        </div>
        <div>
          <h4 className="text-[40px] text-gray-100 font-bold">CITY</h4>
          <ul></ul>
        </div>
      </div>
    </div>
  );
};

export default Location;
