import { useState , useEffect} from 'react'
import Investopedia from './components/Investopedia'  
import GoodMorning from './components/GoodMorning'
import Cnbc from './components/Cnbc'
import InvesstingCom from './components/InvesstingCom'
import FilterButton from "./components/FilterButton"
import axios from 'axios'
import Navbar from './components/Navbar'


function App() {
  const [articles, setArticles] = useState([])
  const [timeRange, setTimeRange] = useState("30m")

  console.log(articles)

  async function fetchArticles() {
    
  }


  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/")
      setArticles(res.data)
    } catch (error) {
      console.log(error)
    }
    }

    useEffect(() => {
      getArticles()
    }, [])


  return (
    <> 
    <Navbar />
    <div className='flex flex-row items-center justify-between  text-3xl gap-4 py-20 font-bold text-white '>
      <GoodMorning />
      <FilterButton onSelect={(value) => console.log("Selected filter:", value)} />
      


    </div>
    <div className='relative grid grid-cols-4 gap- font-semibold text-xs '>
      
      
      {articles.map((item,i) =>   
        <Investopedia 
        key={i}
          name={item.name}
          title={item.title || ""}
          link={item.link}
        
         summary={item.contentSnippet || item.content || ""}
        
          
          pubDate={item.pubDate || item.isoDate || ""}

        
        />
      ) }

      {articles.map((item,i) =>   
        <Cnbc 
          key={i}
          name={item.name}
          title={item.title || ""}
          link={item.link}
        
         summary={item.contentSnippet || item.content || ""}
        
          
          pubDate={item.pubDate || item.isoDate || ""}
      

          
        />


      ) }

      {articles.map((item,i) =>   
        <InvesstingCom 
        key={i}
          name={item.name}
          title={item.title || ""}
          link={item.link}
        
         summary={item.contentSnippet || item.content || ""}
        
          
          pubDate={item.pubDate || item.isoDate || ""}
          

          
        />        


      ) } 

    </div>
      
    </>
  )
}

export default App
