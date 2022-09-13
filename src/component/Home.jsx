import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div class="card text-bg-dark text-white border-0">
        <img
          src="/assets/bg.jpg"
          class="card-img"
          alt="background"
          height="550px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-40 text-black">
              New Season Arrivals
            </h5>
            <p class="card-text lead fs-2 text-black">
              Check out all the trends
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
