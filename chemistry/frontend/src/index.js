import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import axios from 'axios'

import Searchbar from './components/Searchbar'
import Structure from './components/Structure'
import './stylus/main.styl'

const root = document.querySelector('#app')

const App = () => {

  const [query, setQuery] = useState(null)
  const [smile, setSmile] = useState(null)
  const [shown, setShown] = useState('none')


  useEffect(() => {
    if (!query) return 
    axios.get(`http://chemstructures.herokuapp.com/compound/${query}`).then(res => {
      const data = res.data.info
      setSmile(data.smile)
    })
  }, [query])

  return (
    <>
      <div className="searchbar__container">
        <Searchbar executeSearch={(term) => setQuery(term)} setShown={setShown} />
      </div>
      <div className="structure__container">
        <Structure compound={smile} shown={shown} setShown={setShown} />
      </div>
    </>
  )
}

render(<App />, root)