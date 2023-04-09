import React,{useState} from 'react'
import './Works.scss'
function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data= [
    {
      id: '1',
      icon: './assets/mobile.png',
      title: 'SCOPC 360 Tour',
      desc: 'By using Pano2Vr and basic HTML,CSS,JS to create 360 degree tour website for company',
      img: './assets/scopc-thumb.png',
      link: 'https://kkusp360.kku.ac.th/'
    },
    {
      id: '2',
      icon: './assets/mobile.png',
      title: 'Lung Test Mobile App',
      desc: 'By using Flutter and Firebase to let users can delete, create data in real time',
      img: './assets/lung-thumb.png',
      link: 'https://www.youtube.com/watch?v=z1HtylaVzqc&ab_channel=JaruwitTengsujaritgul'
    },
    {
      id: '3',
      icon: './assets/mobile.png',
      title: 'Coursework Planner',
      desc: 'By using MERN-stack to do CRUD and passing data betwwen Back and Front-End(Due to company privacy, I can not provide real website URL)',
      img: './assets/cpai_thumb.png',
      link: ''
    }
  ];

  const handleClick =(way) =>{
    way === 'left' ? setCurrentSlide(currentSlide > 0? currentSlide-1 :2) :
    setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0)
  };
  return (
    <div className='works' id='highlight-projects'>
      <div className="title"><h1>Highlight Projects</h1></div>
      <div className="slider"  
       style ={{transform: `translateX(-${currentSlide *100}vw)`}}>
        {data.map((d) =>(<div className="container">
          <div className="item">
            
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  
                </div>
                <div className="skills-title"><h2>{d.title}</h2></div>
                <div className="skills-desc"><p>{d.desc}</p></div>
                
                
                
              </div>
            </div>
            <div className="right">
              
                <a href={d.link} target="_blank"><img src={d.img} alt="" /></a>
              
            </div>
          </div>
          
        </div>))}
      </div>
      <img src="assets/arrow.png" className='arrow left' alt="" onClick= {() => handleClick('left')}/>
      <img src="assets/arrow.png" className='arrow right' alt="" onClick= {() => handleClick()}/>
    </div>
  )
}

export default Works