import React, { Component } from 'react'
import NewsItems from './NewsItems'
export class News extends Component {

  article = []


  constructor() {
    console.log('hello i m constructor of New.js')
    super();
    this.state = {
      articles: this.article,  //kind of state variable
      loading: false
    }

  }

  async componentDidMount() {   //componentDidMount() is a fn start after everything on app uploaded
    let response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=0d22f87577de4cf0b52741caf0309aaf')
   let  data= await response.json()
    //  this.setState({articles:data.article})
     this.setState({articles:data.articles}) //data.articles is array see sample  output
  }
  render() {
    return (
      <div className='container'>
        <h1 className='text-center my-5'>News-Adda</h1>
        <div className="row">
          {this.state.articles.map((element) => {             //this.article.map((element)  is also fine but this.state.articles.map((element) is used because we need to change all the things which only done through state
            return <div className='col' key={element.url}><NewsItems title={element.title} description={element.description} imageUrl={!element.urlToImage? 'https://img.etimg.com/thumb/msid-79969308,width-650,height-488,imgsize-443378,,resizemode-75/istock-1211803628.jpg':element.urlToImage} NewsUrl={element.url} /></div>
          })}
        </div>

      </div>
    )
  }
}

export default News
