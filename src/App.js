import logo from './logo.svg';
import './App.css';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import { useEffect, useState } from 'react';

function App(){
  return(
    <div className="App">
      {/* <Counter></Counter> */}
      <Users></Users>
    </div>
  );
}
function Users(){
  const [users, setUsers]= useState([]);
  //useEffect(()=>{},[])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))

  },[])
  return(
    <div><h2>External User</h2>
    <p>Data: {users.length}</p>
    {
      users.map(user => <User name = {user.name} email = {user.email}></User>)
    }
    </div>
  )
}
function User(props){
  return(
    <div className='username'>
      <h3>Name of User: {props.name}</h3>
      <p>Email Address: {props.email}</p>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(0);
  const increaseCount = ()=>setCount(count+1);
  const decreaseCount = ()=>setCount(count-1);
  /*console.log(abc);
  {
    const newCount = count+1;
    setCount(newCount);
  }*/
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={increaseCount}>Increase</button>
    </div>
  )
}
/*
const singers = [
  {name:'Mahfuz', job:'singer'},
  {name:'Eva', job:'singer1'},
  {name:'Agun', job:'singer2'},
  {name:'Shuvro', job:'singer3'}
  ]
function App(){
  return(
    <div className="App">
      {
        singers.map(singer=><Singer name={singer.name} job={singer.job}></Singer>)
      }
    
      
    </div>
  );
}
function Singer(props){
  return(
    <div className="wrapper">
      <h1>Singer Name: {props.name}</h1>
      <p>Singer Job: {props.job}</p>
    </div>
  )
}
*/

export default App;
