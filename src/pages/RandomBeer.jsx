import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const RandomBeer = () => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div className="container mt-5">
      {beer ? (
        <div>
          <div className="cbeers-column">
            <img src={beer.image_url} alt={beer.name} className="img-fluid" />
          </div>
          <div>
            <h2>{beer.name}</h2>
            <h5 className="text-muted">{beer.tagline}</h5>
            <p>
              <strong>First brewed:</strong> {beer.first_brewed}
            </p>
            <p>
              <strong>Attenuation level:</strong> {beer.attenuation_level}
            </p>
            <p>{beer.description}</p>
            <p>
              <strong>Contributed by:</strong> {beer.contributed_by}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
};

export default RandomBeer;