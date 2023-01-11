import React, { Component } from 'react'

export class NewsItems extends Component {

    render() {
        let { title, description, imageUrl, NewsUrl, Author, time ,source  } = this.props
        return (
            <div className='m-3'>
                <div className="card" style={{ height: '95vh' }}>
                    <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                        {source}
                        <span class="visually-hidden">unread messages</span>
                    </span>
                    <img src={imageUrl} className="card-img-top" alt="img" style={{ height: '35vh' }} />
                    <div className="card-body d-flex flex-column justify-content-between">
                        <div className="card-title fs-4 fw-bold">{title}<p className="card-text fs-6 fw-normal m-0"  >{description}</p><p className='fs-6 fw-lighter m-0 text-danger'>{Author?Author:'Unknown'}</p><p className='fs-6 fw-light m-0 text-danger'>{time}</p></div>
                        <a href={NewsUrl} className="btn btn-dark btn-lg">Read More</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default NewsItems
