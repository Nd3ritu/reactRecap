import { useState , useEffect} from 'react'

import axios from 'axios'


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
    <div className='flex flex-col items-center justify-center font-semibold mt-30 text-2xl font-serif italic bg-gray-400 '>
      <h1>Nderitu's RSS Feed</h1>
      <h2>Yo, Here's what's happenin Gang</h2>

    </div>
      
    </>
  )
}

export default App
