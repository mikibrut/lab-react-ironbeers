import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx"

const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
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
    
    <div className="container">
      <div>
        {beers.map((beer) => (
          <div className="beers-column" key={beer._id}>
            <Link className="beer-link" to={`/beers/${beer._id}`}>
              <img className="beer-img" src={beer.image_url} alt={beer.name} />
              <h2>{beer.name}</h2>
              <p>{beer.tagline}</p>
              <p>
                <strong>Created by:</strong> {beer.contributed_by}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Beers;