import React, { Component } from 'react'

export class NewsItems extends Component {

    render() {
        let {title,description,imageUrl,NewsUrl}=this.props
        return (
            <div className=''>
                <div className="card" >
                    <img  src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={NewsUrl} className="btn btn-dark btn-sm">View</a>
                        </div>
                </div>
            </div>

        )
    }
}

export default NewsItems
