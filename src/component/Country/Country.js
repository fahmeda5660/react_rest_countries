import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country);
    // destructuring
    const {population, area, region} = props.country;
    return(
            <div className='username'>
              {/* <h3>Name of Country: {props.name}</h3>
              <p>Population: {props.population}</p>
              <p><small>Area: {props.area}</small></p> */}
              {/* <h3>Name of Country: {props.country.name.common}</h3>
              <p>Population: {props.country.population}</p>
              <p><small>Area: {props.country.area}</small></p> */}
              {/* destructuring */}
              <h3>Name of Country: {props.country.name.common}</h3>
              <p>Population: {population}</p>
              <p><small>Area: {area}</small></p>
              <p><small>Region: {region}</small></p>
            </div>
          )
};

export default Country;