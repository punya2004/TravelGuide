import React, { useState } from "react";
import "./styles.css";
const travelList = ["WeekendBreak", "RoadTrip", "PackageHoliday"];
const placeList = {
  WeekendBreak: {
    place: [
      "Bir-Billing, Himachal Pradesh",
      "Munsiyari, Uttarakhand",
      "Hampi, Western Ghats",
      "Periyar National Park,Kerala"
    ],
    Rating: ["3.9/5.0", "4.9/5.0", "3.9/5.0", "3.8/5.0"]
  },
  RoadTrip: {
    place: [
      "Chandigarh to Kasol",
      "Amritsar to Dharamshala",
      "Vishakapatnam to Arakku Valley",
      "Shillong to Cherapunji"
    ],
    Rating: ["3.9/5.0", "4.9/5.0", "3.9/5.0", "3.8/5.0"]
  },
  PackageHoliday: {
    place: [
      "The Paradise Srinagar,kashmir",
      "shivanasamudra waterfall,karnataka",
      "Diriyah,the pearl of Saudi Arabia",
      "Hussain Sagar,Hyderabad"
    ],
    Rating: ["3.9/5.0", "4.9/5.0", "3.9/5.0", "3.8/5.0"]
  }
};
export default function App() {
  const [placeName, setplaceName] = useState("WeekendBreak");

  function clickEventHandler(item) {
    setplaceName(item);
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Smarter Travel</h1>
      </div>

      <main>
        <div>
          <p>
            <b>To Travel Is To Live</b>
          </p>

          {travelList.map((item) => {
            return (
              <button
                className="button"
                style={{ fontSize: "1rem" }}
                key={item}
                onClick={() => clickEventHandler(item)}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="display">
          <h2>{placeName}</h2>

          <ul className="displaylist">
            {placeList[placeName].place.map(function (item, index) {
              return (
                <li className="displayitem" key={item}>
                  {item} <br></br>rating:
                  {placeList[placeName].Rating[index]}
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
