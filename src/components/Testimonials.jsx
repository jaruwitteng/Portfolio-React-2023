import React from 'react'
import './Testimonials.scss'

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      download:
      "Jaruwit_Resume.png",
      desc:
        "./assets/Jaruwit_Resume.png",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "./assets/Jaruwit_CV.png",
      download:
      "Jaruwit_CV.png",
      featured: true,
    },
    
  ];

  return (
    <div className='testimonials' id='resume'>
      <h1>Resume & CV</h1>
      
        <div className="container">
        {data.map((d)=> (
        <div className={d.featured ? 'card featured' : 'card'}>
          <div className="top">
            
          </div>
          <div className="center">
              <h5>Click to Download</h5>
              <a download={d.download} href={d.desc} title="ImageName">
                  <img alt={d.desc} src={d.desc}/>
              </a>
              
              
            
          </div>
          <div className="bottom">
            
          </div>
        </div>
      
      ))}
      </div>
    </div>
  )
}

export default Testimonials