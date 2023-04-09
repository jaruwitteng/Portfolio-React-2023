import React ,{useState}from 'react'
import './Intro.scss'
import { init } from 'ityped'
import {useEffect, useRef} from 'react';

function Intro() {
  const [count, setCount] = useState(true);
  const textRef = useRef();
  const [message, setMessage] = useState(false)
  useEffect(()=> {
    init(textRef.current, {
       showCursor: true,
       backDelay:  1100,
        strings: ['React.js Dev', 'Front End Dev' ] });
  },[])
  return (
    <div>
      {count ?
      <div className='intro' id = 'intro'>
      <div className="left">
          <div className="imgContainer">
            <img src="" alt="" />
          </div>
      </div>
      <div className="right">
          <div className="wrapper">
            <h2>Hi I'm Jaruwit Tengsujaritgul</h2>
            <p onClick={() => setCount(false)}>Click Here!</p>
            <h1><span ref={textRef}></span></h1>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
      </div>
      </div>
      :
      <div className= 'contact2' id='contact2'>
        <div className="left2">
          <img src="assets/me.jpg" alt="" />
        </div>
        <div className="right2">
          <h1 className='head'>BIO</h1>
          <h1>Jaruwit Tengsujaritgul</h1>
          <p>Front-End Developer/ React.js Developer. I lived in Khon Kaen, Thailand.</p>
          <p>I currently study at Khon Kaen university, Computer Engineering Faculty.</p>
          <p>Right now, I'm looking for oppotunity to accquire a internship job position.</p>
          <h1 className='head'>Contact</h1>
          <p>Jaruwitteng@kkumail.com</p>
          <p>080-7628742</p>
        </div>
      </div>}
    </div>
  )
}

export default Intro