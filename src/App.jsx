import { useState } from 'react'
import './App.css'
import Nav from './componant/Nav'
import News from './componant/News'


function App() {

  //https://newsapi.org/v2/top-headlines
  // const [category, setCategory] = useState("health")

  const [category, setCategory] = useState("general")
  return (
    <>
      <Nav setCategory={setCategory}/>  {/* Passing setCategory as a prop to Nav */}
      <News category={category}/>
    </>
  )
}

export default App
