import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

  number = 1
  constructor(props) {      //this is way to pass props in constructor
    console.log('hello i m constructor of New.js')
    super();
    this.state = {
      articles: [],  //kind of state variable
      loading: false,
      page: 1,
      TotalResult: 0
    }
    document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} News-Adda `
  }
  // Update = async () => {
  //   this.props.progress(10)
  //   let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=9e5f03f9a21d4dbcbf5300166ca5a59c&page=${this.state.page}&pageSize=${this.props.pagesize}&category=${this.props.category}`)
  //   let data = await response.json()
  //   this.props.progress(70)
  //   this.setState({ articles: data.articles.concat(this.state.articles), TotalResult: data.totalResults, loading: false })
  //   //data.articles is array see sample  output
  //   // document.title=`News-Adda ${this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)}`
  //   this.props.progress(100)

  // } //dikkat aarhi hai update fn ka use krne mey.

  componentDidMount = async () => {   //componentDidMount() is a fn start after everything on app uploaded

    this.setState({ loading: true })
    this.props.progress(10)
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apikeys}&page=${this.state.page}&pageSize=${this.props.pagesize}&category=${this.props.category}`)
    let data = await response.json()
    this.props.progress(70)
    this.setState({ articles: data.articles, TotalResult: data.totalResults, loading: false, page: 1+this.state.page })
    //data.articles is array see sample  output
    // document.title=`News-Adda ${this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)}`
    this.props.progress(100)

  }

  fetchMoreData = async () => {
    this.props.progress(10)
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apikeys}&page=${this.state.page}&pageSize=${this.props.pagesize}&category=${this.props.category}`)
    let data = await response.json()
    this.props.progress(70)
    this.setState({ articles: this.state.articles.concat(data.articles), TotalResult: data.totalResults, loading: false, page: 1+this.state.page })
    //data.articles is array see sample  output
    // document.title=`News-Adda ${this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)}`
    this.props.progress(100)

  }

  render() {
    return (<>

      {!this.state.loading && <div className='container'>
        <h1 className='text-center my-4'>News-Adda</h1>
        <div className="row">
          <InfiniteScroll
            className='row overflow-hidden'  /* see dom in developer tool to understand this */
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length <= this.state.TotalResult}
            loader={<Spinner /> && this.state.articles.length <= this.state.TotalResult}
          >
            {this.state.articles.map((element) => {             //this.article.map((element)  is also fine but this.state.articles.map((element) is used because we need to change all the things which only done through state
              return <div className='col-12 col-sm-4 col-md-12 col-lg-4' key={element.url + this.number++}><NewsItems title={element.title} description={element.description} imageUrl={!element.urlToImage ? 'https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=0&k=20&c=9rVQfrUGNtR5Q0ygmuQ9jviVUfrnYHUHcfiwaH5-WFE=' : element.urlToImage} NewsUrl={element.url} Author={element.author} time={element.publishedAt} source={element.source.name} /></div>
            })}
          </InfiniteScroll>
        </div>


      </div>}
      {this.state.loading && <Spinner />}
    </>
    )
  }

}
News.propTypes = {
  pagesize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string
};
News.defaultProps = {
  pagesize: 10,
  country: 'in',
  category: 'general'
};


export default News