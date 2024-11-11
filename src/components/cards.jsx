import React from "react";

const data = [
  {
    fan: 26,
    "power consumption": 26,
  },
  {
    light: 26,
    "power consumption": 26,
  },
  {
    "air conditioner": 26,
    "power consumption": 26,
  },
];

const cards = () => {
  return (
    <div>
      {data.map((car) => {
        <card car={car} />;
      })}
    </div>
  );
};
export default cards;
