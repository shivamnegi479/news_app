import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  render() {
    return (
      <div className='container my-3'>
          <h3>Welcome To news Monkey</h3>
          <div className="row ">
            <div className="col-md-4">
            <NewsItem  title="My title" description="A quick brown fox jumps over the lazy dog" imgUrl="http://bossrides.abacaaim.com/wp-content/uploads/2022/03/bike.jpg"/>
            </div>
            <div className="col-md-4">
            <NewsItem  title="My title" description="A quick brown fox jumps over the lazy dog" imgUrl="http://bossrides.abacaaim.com/wp-content/uploads/2022/03/bike.jpg"/>
            </div>
            <div className="col-md-4">
            <NewsItem  title="My title" description="A quick brown fox jumps over the lazy dog" imgUrl="http://bossrides.abacaaim.com/wp-content/uploads/2022/03/bike.jpg"/>
            </div>
         
          

          </div>
    
      </div>
    )
  }
}

export default News