import React from 'react'
import './abtmezigzag.css'
const AbtZigZag = () => {
  
  return (
    <div>
      <div className='container'>
      <div className='image'>
        <img src='whoAmI.png' alt='' className='content_img'/>
      </div>
      <div className='content'>
        <div className='title'>Who Am I?</div>
        <div className='content_para'>I'm a dedicated web development student with a keen interest in crafting intuitive and visually appealing websites. My journey in tech is driven by curiosity and a love for creating engaging digital experiences.</div>
      </div>
      </div>


      <div className='container'>
      <div className='image'>
        <img src='careerObj.jpg' alt='' className='content_img'/>
      </div>
      <div className='content'>
        <div className='title'>Career Objective</div>
        <div className='content_para'>To build a career in the tech industry where I can use my skills in design and technology. I want to work on interesting projects, keep learning new things, and contribute to making a positive impact.</div>
      </div>
      </div>


      <div className='container'>
      <div className='image'>
        <img src='education.png' alt='' className='content_img'/>
      </div>
      <div className='content'>
        <div className='title'>Education</div>
        <div className='content_para'>
          <ul className='education_list'>
            <li>B.Tech-Computer Science and Business Systems<br/>(2021-2025)<br/>K.S.Rangasamy College of Technology, Tiruchengode<br/>Current CGPA : 8.1</li>
            <li>HSC - (2018-2020)<br/>Bharathi Vidhyalaya Mat. Hr. Sec School, Gobichettipalayam<br/>Percentage : 73.5%</li>
            <li>SSLC - (2018)<br/>Bharathi Vidhyalaya Mat. Hr. Sec School, Gobichettipalayam<br/>Percentage : 92.6%</li>
          </ul>
        </div>
      </div>
      </div>

      <div className='container'>
      <div className='image'>
        <img src='areaofinterest.jpg' alt='' className='content_img'/>
      </div>
      <div className='content'>
        <div className='title'>Areas of Interest</div>
        <div className='content_para'>
        <ul className='education_list'>
            <li>Full Stack Web Development</li>
            <li>UI/UX Designing</li>
            <li>Programming</li>
          </ul>
        </div>
      </div>
      </div>

      <div className='container'>
      <div className='image'>
        <img src='language.jpg' alt='' className='content_img'/>
      </div>
      <div className='content'>
        <div className='title'>Languages Known</div>
        <div className='content_para'>
        <ul className='education_list'>
        <li>English (R,W,S)</li>
        <li>Tamil (R,W,S)</li>
          </ul>
          
        </div>
      </div>
      </div>

      <div className='container'>
      <div className='image'>
        <img src='hobby.jpg' alt='' className='content_img'/>
      </div>
      <div className='content'>
        <div className='title'>Hobbies</div>
        <div className='content_para'>
        <ul className='education_list'>
        <li>Photography</li>
        <li>Piano Playing</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AbtZigZag
