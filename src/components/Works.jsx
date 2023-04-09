import React,{useState} from 'react'
import './Works.scss'
function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data= [
    {
      id: '1',
      icon: './assets/mobile.png',
      title: 'Programming skills',
      desc: 'TEst',
      img: './assets/skills1.png'
    },
    {
      id: '2',
      icon: './assets/mobile.png',
      title: 'Adobe skills',
      desc: 'TEst2',
      img: './assets/skills2.png'
    },
    {
      id: '3',
      icon: './assets/mobile.png',
      title: 'Animation skills',
      desc: 'TEst3',
      img: './assets/skills3.png'
    }
  ];

  const handleClick =(way) =>{
    way === 'left' ? setCurrentSlide(currentSlide > 0? currentSlide-1 :2) :
    setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0)
  };
  return (
    <div className='works' id='skills'>
      <div className="slider"  
       style ={{transform: `translateX(-${currentSlide *100}vw)`}}>
        {data.map((d) =>(<div className="container">
          <div className="item">
            
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  
                </div>
                <h2>{d.title}</h2>
                
                
              </div>
            </div>
            <div className="right">
              
                <img src={d.img} alt="" />
              
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