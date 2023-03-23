import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const DetailBeer = () => {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [beerId]);

  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div>
      {beer ? (
        <div>
          <div className="beers-column">
            <img src={beer.image_url} alt={beer.name}/>
          </div>
          <div>
            <h2>{beer.name}</h2>
            <h5>{beer.tagline}</h5>
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

export default DetailBeer;