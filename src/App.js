import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './component/Countries/Countries';

function App(){
  return(
    <div className="App">
      <Countries></Countries>
    </div>
  );
}
// function LoadCountries(){
//   const [countries, setCountries]= useState([]);
//   //useEffect(()=>{},[])
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>setCountries(data))

//   },[])
//   return(
//     <div>
//         <h2>Rest Countries</h2>
//         <p>Data: {countries.length}</p>
//         { 
//           countries.map(country => <Country name = {country.name.common} population ={country.population}  ></Country>)
//         }
//     </div>
//   )
// }
// function Country(props){
//   return(
//     <div className='username'>
//       <h3>Name of Country: {props.name}</h3>
//       <p>Population: {props.population}</p>
//     </div>
//   )
// }
export default App;
