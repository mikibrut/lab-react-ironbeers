import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from '../components/Navbar';

function NewBeer() {
    const [newBeer, setNewBeer] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {
        ...newBeer,
        attenuation_level: parseInt(newBeer.attenuation_lebel)
        
    }
    try {
        await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body); 
        navigate("/");
    } catch (error) {
        console.error(error)
    }
}

  const handleChange = (e) => {
    setNewBeer(prev => {
        return {
            ...prev,
            [e.target.name]: e.target.value
        }
    });
}

  return (
   
   <>
    <div>
        <Navbar/>
    </div>
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" id="name" name="name" required value={newBeer.name} onChange={handleChange} />

        <label>Tagline</label>
        <input type="text" id="tagline" name="tagline" required value={newBeer.tagline} onChange={handleChange} />

        <label>Description</label>
        <textarea id="description" name="description" required value={newBeer.description} onChange={handleChange}></textarea>

        <label>First Brewed</label>
        <input type="text" id="first_brewed" name="first_brewed" required value={newBeer.first_brewed} onChange={handleChange} />

        <label>Brewer's Tips</label>
        <input type="text" id="brewers_tips" name="brewers_tips" required value={newBeer.brewers_tips} onChange={handleChange} />

        <label>Attenuation Level</label>
        <input type="number" id="attenuation_level" name="attenuation_level" required value={newBeer.attenuation_level} onChange={handleChange} />

        <label>Contributed By</label>
        <input type="text" id="contributed_by" name="contributed_by" required value={newBeer.contributed_by} onChange={handleChange} />

        <button type="submit">Add New Beer</button>
      </form>
    </div>
    </>
  );
}

export default NewBeer;