import { useState , useEffect} from 'react'
import Investopedia from './components/Investopedia'  
import GoodMorning from './components/GoodMorning'
import Cnbc from './components/Cnbc'
import InvesstingCom from './components/InvesstingCom'
import FilterButton from "./components/FilterButton"
import axios from 'axios'
import Navbar from './components/Navbar'

// Mapping of source names to their respective components for dynamic rendering
const componentSource = {
  'Investopedia': Investopedia,
  'CNBC': Cnbc,
  'Investing.com': InvesstingCom
}


function App() {
  const [articles, setArticles] = useState([]) //state change for articles being fetched and displayed
  const [timeRange, setTimeRange] = useState("") //state change for time range filter

  console.log(articles)


  // Async / await function to fetch articles from the backend with optional time range filtering
  async function fetchArticles(range = "") { //range parameter to specify the time filter if it exists
    const res = await fetch(`http://localhost:4000/filtered${range ? `?timeRange=${range}` : "" }`) //tertiary operator to check if range exists and if it does, append it as a query parameter
    const data = await res.json() //parse the response data as JSON because fetch returns a stream of data
    setArticles(data) //update the articles state with the fetched data
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
