import React, { Component } from 'react'

export class NewsItems extends Component {

    render() {
        let {title,description,imageUrl,NewsUrl}=this.props
        return (
            <div className='m-3'>
                <div className="card"  style={{height:'95vh'}}>
                    <img src={imageUrl} className="card-img-top" alt="img" style={{height:'35vh'}}/>
                        <div className="card-body d-flex flex-column justify-content-between">
                            <p className="card-title fs-4 fw-bold">{title}<p className="card-text fs-6 fw-normal"  >{description}</p></p>
                            <a href={NewsUrl} className="btn btn-dark btn-lg">Read More</a>
                        </div>
                </div>
            </div>

        )
    }
}

export default NewsItems
