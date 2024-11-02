import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <h3 className="main__title--one">Monthly Subscription</h3>
      <div className="main-amount">
        <h3 className="main-amount__price">
          $29
          <p>per month</p>
        </h3>
        <div className="main-amount__day">
          Full access for less than $1 a day
        </div>
      </div>
      <button className="main-button">Sign Up</button>
    </main>
  );
};

export default Main;
