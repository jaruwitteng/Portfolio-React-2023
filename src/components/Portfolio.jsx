import React , {useEffect, useState} from 'react'
import './Portfolio.scss'
import PortfolioList from '../components/portfolioList/PortfolioList'
//import {reactPortfolio,flutterPortfolio,pythonPortfolio} from '../../../../react course/portrenew2/src/components/portfolioList/data.jsx';
import {reactPortfolio,flutterPortfolio,pythonPortfolio,mernPortfolio,phpPortfolio} from '../components/portfolioList/data.jsx';
function Portfolio() {
  const [selected, setSelected] = useState('restaurant');
  const [data, setData] = useState([]);
  const list = [
    {
      id : 'mern',
      title : 'MERN Projects'
    },
    {
      id : 'react',
      title : 'React Projects'
    },
    {
      id : 'flutter',
      title : 'Flutter projects'
    },
    {
      id : 'php',
      title : 'PHP projects'
    }
  ]
  useEffect(() => {
      switch(selected){
        case 'mern':
          setData(mernPortfolio);
          break;
        case 'react':
          setData(reactPortfolio);
          break;
          case 'flutter':
          setData(flutterPortfolio);
          break;
          case 'php':
          setData(phpPortfolio);
          break;
          default:
            setData(reactPortfolio);
      }
  },[selected])
  return (
    <div className='portfolio' id ='portfolio'>
      <h1>Portfolio</h1>
      <div className="select-tab">
      <ul>
        {list.map(item=> (
          <PortfolioList
           title ={item.title}
           active ={selected === item.id}
           setSelected = {setSelected}
           id = {item.id}
           />
           
        ))}
      </ul>
      </div>
      <div className="container">
        {data.map((d) =>(
          <a href={d.link} target="_blank">
            <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Portfolio