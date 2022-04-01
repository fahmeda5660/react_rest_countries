import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
  const [countries, setCountries]= useState([]);
  //useEffect(()=>{},[])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))

  },[])
  return(
    <div>
        <h2>Rest Countries</h2>
        <p>Data: {countries.length}</p>
        {
          countries.map(country => <Country 
            country = {country}
            // name = {country.name.common} 
            // population ={country.population} 
            // area ={country.area} 
            >
          </Country>)
        }
    </div>
    );
};

export default Countries;