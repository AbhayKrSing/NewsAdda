import React, { Component } from 'react'
import NewsItems from './NewsItems'
export class News extends Component {
  article = [
    {
      "source": {
        "id": "financial-times",
        "name": "Financial Times"
      },
      "author": "Lauren Fedor",
      "title": "Kevin McCarthy on course to lose first round Speaker vote - Financial Times",
      "description": "Republican becomes first majority party leader in a century to fall short in early ballot",
      "url": "https://www.ft.com/content/16fdd88e-f135-4c96-8397-12bc6dff61ab",
      "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F9a2b42a0-f77f-403c-b3af-3312195eab6c.jpg?source=next-opengraph&fit=scale-down&width=900",
      "publishedAt": "2023-01-03T18:24:04Z",
      "content": "Kevin McCarthy was in the fight of his political life on Tuesday after he lost an initial vote to be elected Speaker of the House of Representatives, becoming the first majority party leader in a cen… [+4122 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": "",
      "title": "Bills' Damar Hamlin suffers cardiac arrest on field vs. Bengals: Family releases statement; safety 'fighting' - CBS Sports",
      "description": "Hamlin collapsed after a hit during the first quarter of 'Monday Night Football'",
      "url": "https://www.cbssports.com/nfl/news/bills-damar-hamlin-suffers-cardiac-arrest-on-field-vs-bengals-family-releases-statement-safety-fighting/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/01/03/db51f391-d96e-4a01-adcd-bd99e94835d6/thumbnail/1200x675/dbdaec313b010b974d009340bab48455/mnf-ambulance-g.jpg",
      "publishedAt": "2023-01-03T17:47:00Z",
      "content": "A scary and emotional scene unfolded early during Monday night's game between the Bills and Bengals. With 5:58 remaining in the first quarter, Bills safety Damar Hamlin collapsed after rising to his … [+4943 chars]"
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "Mary Kekatos, Emily Shapiro, Aaron Katersky, Josh Margolin",
      "title": "Idaho murders: Suspect Bryan Kohberger set to appear in court as he faces charges - ABC News",
      "description": "Bryan Kohberger, 28, was arrested in Pennsylvania on Friday.",
      "url": "https://abcnews.go.com/US/idaho-murders-suspect-bryan-kohberger-set-court-faces/story?id=96015943",
      "urlToImage": "https://s.abcnews.com/images/US/bryan-kohberger-ap-jt-221230_1672420974554_hpMain_16x9_992.jpg",
      "publishedAt": "2023-01-03T17:35:33Z",
      "content": "The suspect accused of killing four University of Idaho students is set to appear in court in Monroe County, Pennsylvania, on Tuesday afternoon as he faces first-degree murder and burglary charges.\r\n… [+2832 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Videocardz.com"
      },
      "author": null,
      "title": "NVIDIA announces GeForce RTX 40 Laptop GPU series, RTX 4090 with 9728 CUDAs and 16GB GDDR6 memory - VideoCardz.com",
      "description": "NVIDIA kicks off CES 2023 with RTX 40 Laptop GPU launch NVIDIA is officially announcing its RTX 40 series for laptops.  The company confirmed today it will introduce a new flagship RTX 40 mobile series for enthusiast. NVIDIA RTX 40 series based on Ada Lovelac…",
      "url": "https://videocardz.com/newz/nvidia-announces-geforce-rtx-40-laptop-gpu-series-rtx-4090-with-9728-cudas-and-16gb-gddr6-memory",
      "urlToImage": "https://cdn.videocardz.com/1/2023/01/GEFORCE-40-MOBILE.jpg",
      "publishedAt": "2023-01-03T16:44:00Z",
      "content": "NVIDIA is officially announcing its RTX 40 series for laptops. \r\nThe company confirmed today it will introduce a new flagship RTX 40 mobile series for enthusiast.\r\nNVIDIA RTX 40 series based on Ada L… [+2866 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Leslie Josephs",
      "title": "Southwest Airlines schedule stabilizes after holiday meltdown but costs are still piling up - CNBC",
      "description": "Southwest said it is now focused on improving its technology that contributed to thousands of flight cancellations over the year-end holidays.",
      "url": "https://www.cnbc.com/2023/01/03/southwest-cancellations-stabilize.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107171959-1672261852333-gettyimages-1245856580-Southwest.jpeg?v=1672762937&w=1920&h=1080",
      "publishedAt": "2023-01-03T16:22:17Z",
      "content": "Southwest Airlines stabilized its schedule over the weekend after about 16,000 cancellations, but its systemwide holiday meltdown could cost it hundreds of millions of dollars.\r\nSouthwest had cancele… [+2531 chars]"
    }

  ]
  constructor() {
    console.log('hello i m constructor of New.js')
    super();
    this.state = {
      articles: this.article,  //kind of state variable
      loading: false
    }
  }
  render() {
    return (
      <div className='container'>
        <h1 className='text-center my-5'>News-Adda</h1>
        <div className="row">
          {this.state.articles.map((element) => {             //this.article.map((element)  is also fine but this.state.articles.map((element) is used because we need to change all the things which only done through state
         return   <div className='col' key={element.url}><NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} NewsUrl={element.url} /></div>
          })}
        </div>

      </div>
    )
  }
}

export default News
