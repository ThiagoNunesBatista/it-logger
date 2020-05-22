import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'

function App () {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit()
  }, [])

  return (
    <>
      <SearchBar />
      <Logs />
    </>
  )
}

export default App
