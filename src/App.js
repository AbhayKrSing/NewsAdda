import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
    


          <Routes>
            <Route path="/"  element={<News pagesize={15} country="in" category='general' key='general' />} />
            <Route path="/entertainment"  element={<News pagesize={15} country="in" category='entertainment' key='entertainment' />} />
            <Route path="/business"  element={<News pagesize={15} country="in" category='business' key='business' />} />
            <Route path="/health"  element={<News pagesize={15} country="in" category='health' key='health'/>} />
            <Route path="/science"  element={<News pagesize={15} country="in" category='science' key='science'/>} />
            <Route path="/sports"  element={<News pagesize={15} country="in" category='sports' key='sports'/>} />
            <Route path="/technology"  element={<News pagesize={15} country="in" category='technology' key='technology'/>} />
          </Routes>


        </div>
      </BrowserRouter>
    )
  }
}

