import React from 'react';
import Routes from '../src/routes/index'
import { BrowserRouter } from 'react-router-dom'





const App = () => {
  return (
    //<h1>Hello World</h1>
    <>
    <BrowserRouter>
    <Routes/>
    </BrowserRouter>
    </>
  )
}

export default App;
