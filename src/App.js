import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News  from './Components/News' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  // const [progress,setProgress] = useState(0);
apikeys =process.env.REACT_APP_API_KEYS2
 state={
  progress:10
 }
   setProgress=(value)=>{
    this.setState({progress: value})
   }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <LoadingBar
            color='red'
            progress={this.state.progress} 
          />
          <Routes>
            <Route path="/" element={<News progress={this.setProgress} apikeys={this.apikeys}  pagesize={10} country="in" category='general' key='general'/>} />
            <Route path="/entertainment" element={<News progress={this.setProgress} apikeys={this.apikeys}  pagesize={10} country="in" category='entertainment' key='entertainment' />} />
            <Route path="/business" element={<News progress={this.setProgress} apikeys={this.apikeys}  pagesize={10} country="in" category='business' key='business' />} />
            <Route path="/health" element={<News progress={this.setProgress} apikeys={this.apikeys}  pagesize={10} country="in" category='health' key='health' />} />
            <Route path="/science" element={<News progress={this.setProgress} apikeys={this.apikeys}  pagesize={10} country="in" category='science' key='science' />} />
            <Route path="/sports" element={<News progress={this.setProgress} apikeys={this.apikeys}  pagesize={10} country="in" category='sports' key='sports' />} />
            <Route path="/technology" element={<News progress={this.setProgress} apikeys={this.apikeys}  pagesize={10} country="in" category='technology' key='technology' />} />
          </Routes>


        </div>
      </BrowserRouter>
    )
  }
}

