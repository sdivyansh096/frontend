import React from "react";
import Chart from "./Chart";

const Main = () => {
  return (
    <div>
      Dashboard
      <div className="dash">
        <div>
          <div> fan: 26</div>
          <div> power consumption: 26</div>
        </div>
        <div>
          <div> light: 26</div>
          <div> power consumption: 26</div>
        </div>
        <div>
          <div> air conditioner: 26</div>
          <div> power consumption: 26</div>
        </div>
        <div>
          <div> generator: 26</div>
          <div> power consumption: 26</div>
        </div>

        <Chart />
      </div>
    </div>
  );
};
export default Main;
