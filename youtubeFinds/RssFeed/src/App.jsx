import { useState , useEffect} from 'react'
import Investopedia from './components/Investopedia'  
import GoodMorning from './components/GoodMorning'
import Cnbc from './components/Cnbc'
import InvesstingCom from './components/InvesstingCom'
import FilterButton from "./components/FilterButton"
import axios from 'axios'
import Navbar from './components/Navbar'


const componentSource = {
  'Investopedia': Investopedia,
  'CNBC': Cnbc,
  'Investing.com': InvesstingCom
}


function App() {
  const [articles, setArticles] = useState([])
  const [timeRange, setTimeRange] = useState("")

  console.log(articles)

  async function fetchArticles(range = "") {
    const res = await fetch(`http://localhost:4000/filtered${range ? `?timeRange=${range}` : "" }`)
    const data = await res.json()
    setArticles(data)
  }


  
    useEffect(() => {
      fetchArticles()
    }, [])


  return (
    <> 
    <Navbar />
    <div className='flex flex-row items-center justify-between  text-3xl gap-4 py-20 font-bold text-white '>
      <GoodMorning />
      <FilterButton

       onSelect={(value) => {
        setTimeRange(value);
        fetchArticles(value)
       }}
       />
      


    </div>
    <div className='relative grid grid-cols-4 gap- font-semibold text-xs '>
      {
        articles.map((item, i) => {
          const Component = componentSource[item.source];
          console.log(Component)

          if (!Component) return null;

          return (
            <Component 
              key={`${item.source} -${item.link}`}
              title={item.title }
              link={item.link}
              pubDate = {item.pubDate}
            
            />
          )

        })
      }
      
      
      
    </div>
      
    </>
  )
}

export default App
