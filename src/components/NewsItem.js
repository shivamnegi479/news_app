import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
      let {title, description,imgUrl,newsurl,author,date,source}=this.props
      // let description1=toString(description).slice(0,50)
      
    return (
      <div>
      
        <div className="card" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:1}}>
   {source}

  </span>
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text second-text"><small className='text-muted'>By {author} {new Date(date).toUTCString()}</small></p>
            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-info">Know More</a>
        </div>
        </div>
    </div>
    )
  }
}

export default NewsItem