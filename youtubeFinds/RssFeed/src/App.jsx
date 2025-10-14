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
      <h1>Nderitu's RSS Feed</h1>
    </>
  )
}

export default App
