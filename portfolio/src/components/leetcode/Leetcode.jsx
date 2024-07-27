import React from 'react'
import './leetcode.css'
const Leetcode = () => {

    const handleClick = () => {
      window.open('https://leetcode.com/u/rupaknbr/', '_blank');
    };
  
  return (
    <div>
      <div className="my_skills">LEETCODE</div>
      <img onClick={handleClick} src='https://leetcode.card.workers.dev/rupaknbr?theme=default&font=baloo&extension=null' className='leetcode'></img>
    </div>
  )
}

export default Leetcode;
