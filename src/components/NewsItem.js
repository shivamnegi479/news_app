import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
      let {title, description,imgUrl,newsurl}=this.props
      // let description1=toString(description).slice(0,50)
      
    return (
      <div>
        <div className="card" >
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-info">Know More</a>
        </div>
        </div>
    </div>
    )
  }
}

export default NewsItem