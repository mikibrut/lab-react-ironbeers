import React from "react";
import { Link } from "react-router-dom";
import Beer from "../assets/beers.png";
import Random from  "../assets/random.png";
import NewBeer from "../assets/new.png";


const Home = () => {
  return (
    <div className="container">
    
        <div className="beers-column">
          <Link to="/beers">
            <img src={Beer} alt="All Beers" />
          </Link>
        </div>
        
        <div className="beers-column">
          <Link to="/random-beer">
            <img src={Random} alt="Random Beer" />
          </Link>
        </div>
        
        <div className="beers-column">
          <Link to="/new-beer">
            <img src={NewBeer} alt="New Beer" />
          </Link>
        </div>
      
    </div>
  );
};

export default Home;