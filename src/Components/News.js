import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class News extends Component {

  article = []
  constructor() {
    console.log('hello i m constructor of New.js')
    super();
    this.state = {
      articles: this.article,  //kind of state variable
      loading: false,
      page: 1,
      TotalResult: 0
    }

  }

  componentDidMount = async () => {   //componentDidMount() is a fn start after everything on app uploaded
    this.setState({loading:true})
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=0d22f87577de4cf0b52741caf0309aaf&page=${this.state.page}&pageSize=${this.props.pagesize}&category=${this.props.category}`)
    let data = await response.json()
    //  this.setState({articles:data.article})
    this.setState({ articles: data.articles, TotalResult: data.totalResults }) //data.articles is array see sample  output
    this.setState({loading:false})
  }
  handleprevious = async () => {
    this.setState({loading:true})
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country${this.props.country}&apiKey=0d22f87577de4cf0b52741caf0309aaf&page=${this.state.page - 1}&pageSize=${this.props.pagesize}&category=${this.props.category}`)
    let data = await response.json()
    this.setState({ articles: data.articles, page: this.state.page - 1 })
    this.setState({loading:false})
  }
  handlenext = async () => {
    // if(this.state.page>Math.ceil(this.state.TotalResult/20)){

    // }
    this.setState({loading:true})
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country${this.props.country}&apiKey=0d22f87577de4cf0b52741caf0309aaf&page=${this.state.page + 1}&pageSize=${this.props.pagesize}&category=${this.props.category}`)
    let data = await response.json()
    this.setState({ articles: data.articles, page: this.state.page + 1 })
    this.setState({loading:false})
  }

  render() {
    return (<>
      {this.state.loading && <Spinner />}
      {!this.state.loading && <div className='container'>
        <h1 className='text-center my-5'>News-Adda</h1>
        <div className="row">
          {this.state.articles.map((element) => {             //this.article.map((element)  is also fine but this.state.articles.map((element) is used because we need to change all the things which only done through state
            return <div className='col-12 col-sm-4' key={element.url}><NewsItems title={element.title ? element.title.slice(0, 72) + '.....' : 'checkout....'} description={element.description ? element.description.slice(0, 76) + '...' : element.title} imageUrl={!element.urlToImage ? 'https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=0&k=20&c=9rVQfrUGNtR5Q0ygmuQ9jviVUfrnYHUHcfiwaH5-WFE=' : element.urlToImage} NewsUrl={element.url} /></div>
          })}
        </div>
      
      <div className="container d-flex justify-content-between my-5">
        <button disabled={this.state.page === 1} className='btn btn-dark' onClick={this.handleprevious}>&laquo; previous</button>
        <button disabled={Math.ceil(this.state.TotalResult / this.props.pagesize) === this.state.page} className='btn btn-dark' onClick={this.handlenext} id='buttonNext'>Next &raquo;</button>
      </div>
      </div>}
    </>
    )
  }

}
News.propTypes = {
  pagesize: PropTypes.number,
  country: PropTypes.string,
  category:PropTypes.string
};
News.defaultProps = {
  pagesize: 10,
  country: 'in',
  category:'general'
};


export default News
