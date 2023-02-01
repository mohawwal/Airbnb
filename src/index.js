import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Head';
import reportWebVitals from './reportWebVitals';
import Hero from './Logos';
import Card from './Buy';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='All'>
      <Navbar />
      <Hero />
      <div className='pcard'>
        <Card
          img = "/images/image-12.png" 
          star = "/images/star1.png"
          rate = "5.0"
          txt = "(6)"
          comment = "Life lessons with Katie Zaferes"
          price = "From $175"
        />
        <Card
        img = "/images/mountain-bike.png" 
        star = "/images/star1.png"
        rate = "4.8"
        txt = "(30)"
        comment = "Learn Wedding photography"
        price = "From $125"
      />
      <Card
        img = "/images/wedding-photography 1.png" 
        star = "/images/star1.png"
        rate = "5.0"
        txt = "(2)"
        comment = "Group Mountain Biking"
        price = "From $50"
      />
      </div>
    </div>
  </React.StrictMode>
);

// const nums = [1, 2, 3, 4, 5]
// const squares = nums.map(function(num){
//   return num * num
// })
// console.log

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
