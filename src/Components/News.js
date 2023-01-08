import React, { Component } from 'react'
import NewsItems from './NewsItems'
export class News extends Component {

  article = []


  constructor() {
    console.log('hello i m constructor of New.js')
    super();
    this.state = {
      articles: this.article,  //kind of state variable
      loading: false,
      page: 1,
      TotalResult:0
    }

  }

  componentDidMount = async () => {   //componentDidMount() is a fn start after everything on app uploaded
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=0d22f87577de4cf0b52741caf0309aaf&page=${this.state.page}&pageSize=12`)
    let data = await response.json()
    //  this.setState({articles:data.article})
    this.setState({ articles: data.articles ,TotalResult:data.totalResults}) //data.articles is array see sample  output
  }
  handleprevious = async () => {
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=0d22f87577de4cf0b52741caf0309aaf&page=${this.state.page - 1}&pageSize=12`)
    let data = await response.json()
    this.setState({ articles: data.articles, page: this.state.page - 1 })
  }
  handlenext = async () => {
    // if(this.state.page>Math.ceil(this.state.TotalResult/20)){

    // }
  let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=0d22f87577de4cf0b52741caf0309aaf&page=${this.state.page + 1}&pageSize=12`)
      let data = await response.json()
      this.setState({ articles: data.articles, page: this.state.page + 1 })
   
  }
  render() {
    return (<>
      <div className='container'>
        <h1 className='text-center my-5'>News-Adda</h1>
        <div className="row">
          {this.state.articles.map((element) => {             //this.article.map((element)  is also fine but this.state.articles.map((element) is used because we need to change all the things which only done through state
            return <div className='col' key={element.url}><NewsItems title={element.title?element.title.slice(0,72)+'.....':'checkout....'} description={element.description?element.description.slice(0,76)+'...':element.title}  imageUrl={!element.urlToImage ? 'https://thumbs.dreamstime.com/b/t-lymphocytes-attacking-cancer-cell-d-illustration-anticancer-immunity-treatment-concept-t-lymphocytes-attacking-cancer-cell-125858701.jpg' : element.urlToImage} NewsUrl={element.url} /></div>
          })}
        </div>
      </div>
      <div className="container d-flex justify-content-between my-5">
        <button disabled={this.state.page === 1} className='btn btn-dark' onClick={this.handleprevious}>&laquo; previous</button>
        <button disabled={Math.ceil(this.state.TotalResult/10)===this.state.page} className='btn btn-dark' onClick={this.handlenext} id='buttonNext'>Next &raquo;</button>
      </div>
    </>
    )
  }
}

export default News
