import React , {useEffect, useState} from 'react'
import './Portfolio.scss'
import PortfolioList from '../../../../react course/portrenew2/src/components/portfolioList/PortfolioList'
import {reactPortfolio,flutterPortfolio,pythonPortfolio} from '../../../../react course/portrenew2/src/components/portfolioList/data.jsx';
function Portfolio() {
  const [selected, setSelected] = useState('restaurant');
  const [data, setData] = useState([]);
  const list = [
    {
      id : 'react',
      title : 'React Projects'
    },
    {
      id : 'flutter',
      title : 'Flutter projects'
    },
    {
      id : 'python',
      title : 'Python projects'
    }
  ]
  useEffect(() => {
      switch(selected){
        case 'react':
          setData(reactPortfolio);
          break;
          case 'flutter':
          setData(flutterPortfolio);
          break;
          case 'python':
          setData(pythonPortfolio);
          break;
          default:
            setData(reactPortfolio);
      }
  },[selected])
  return (
    <div className='portfolio' id ='portfolio'>
      <h1>Portfolio</h1>
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