import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, date, source } = this.props;
        // let a = this.props   a.title = title of news and a.description = description of news;
        // target="_blank" is used to open the content in new tab
        return (
            <div className='container my-2'>
                <div className="card border-dark">
                    <img src={imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><hr />{title}<hr /></h5>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span>
                        <p className="card-text">{description}</p>
                        <span className="badge my-2 bg-info text-dark">Updated: {new Date(date).toUTCString()}</span>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
