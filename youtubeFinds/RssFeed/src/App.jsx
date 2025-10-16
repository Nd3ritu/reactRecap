import { useState , useEffect} from 'react'
import Investopedia from './components/Investopedia'  

import axios from 'axios'
import Navbar from './components/Navbar'


function App() {
  const [articles, setArticles] = useState([])

  console.log(articles)


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
    <div className='flex flex-col items-center justify-center  text-3xl gap-4 py-8 font-bold text-white '>
      <h1>Nderitu's RSS Feed</h1>
      <h2>Yo, Here's what's happenin Gang</h2>

    </div>
    <div className='grid grid-cols-4 gap- font-semibold text-xs '>
      
      
      {articles.map((item,i) =>   
        <Investopedia 

          key={i}
          title={item.item.title}
          link={item.item.link}
          categories={item.item.categories[0]}
          creator={item.item.creator}
          pubDate={item.item.pubDate}
          guid={item.item.guid}
          contentSnippet={item.item.contentSnippet}

        
        />
      ) }

    </div>
      
    </>
  )
}

export default App
