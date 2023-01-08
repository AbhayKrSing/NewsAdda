import React, { Component } from 'react'

export class NewsItems extends Component {

    render() {
        let {title,description,imageUrl,NewsUrl}=this.props
        return (
            <div className='d-flex justify-content-center m-3'>
                <div className="card" style={{width: '18rem' ,height:'60vh'}}>
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
