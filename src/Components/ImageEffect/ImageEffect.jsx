import React from 'react';
import "./ImageEffect.css";


const ImageEffect = () => {

   
  return (
    <div className='secontaion'>
      <h2>DON TEWIZY</h2>
      <div className="banner">
        <div className="blocks"></div>
      </div>

      
    </div>

    
  )
}





export default ImageEffect

const banner = document.getElementsByClassName('banner')[0];
const blocks = document.getElementsByClassName('blocks');

for (var i = 1; i < 400; i++){
    banner.innerHTML += "<div className='blocks'></div>";
    const duration = Math.random() * 5;
    blocks[i].style.animationDuration = 2 + duration + 's'
    blocks[i].style.animationDelay = duration + 's'
}
