import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import './style.css'
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pagesize:8,
    category:'general'
  }
  static propTypes = {
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string,


  }

  articles=[]
  constructor(props){
    super(props);
let myt=this.props.category

    this.state={
      articles:this.articles,
      loading:false,
      page:1
    }
    document.title=`${myt.charAt(0).toUpperCase()+myt.slice(1)} - News_App`

  }

  async updateNews(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c2cffc376cf841fda2e39392378a1c2e&page=${this.state.page}&pageSize=${this.props.pagesize}`
    this.setState({loading:true})
    let data=await fetch(url)
   
    let parseData=await data.json();
    //  console.log(parseData)
    this.setState({articles:parseData.articles,
     totalResults:parseData.totalResults,
     loading:false})
  }
  async componentDidMount(){
    
 let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c2cffc376cf841fda2e39392378a1c2e&page=1&pageSize=${this.props.pagesize}`
 this.setState({loading:true})
 let data=await fetch(url)

 let parseData=await data.json();
 //  console.log(parseData)
 this.setState({articles:parseData.articles,
  totalResults:parseData.totalResults,
  loading:false})
}

prevClick= async ()=>{
  // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c2cffc376cf841fda2e39392378a1c2e&page=${this.state.page-1}&pageSize=${this.props.pagesize}`
  // this.setState({loading:true})
  // let data=await fetch(url)

  // let parseData=await data.json();
  // this.setState({
  //  articles:parseData.articles,
  //  page:this.state.page-1,
  //  loading:false
  // })
  this.updateNews();
  this.setState({
    page:this.state.page-1
  })
}
nextClick= async ()=>{
  if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)){
    
  }
  else{  
//       let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c2cffc376cf841fda2e39392378a1c2e&page=${this.state.page+1}&pageSize=${this.props.pagesize}`
//       this.setState({loading:true})
//       let data=await fetch(url)
//       let parseData=await data.json();
//       // console.log(parseData)
//       this.setState({
//         page:this.state.page+1,
//         articles:parseData.articles,
//         loading:false
//  })
// }
this.updateNews();
this.setState({
  page:this.state.page+1
})
  }
}
  render() {

    let myt1=this.props.category
       return (
         <div className='container my-3'>
          <h3 className='text-center my-4'>News App - Top {myt1.charAt(0).toUpperCase()+myt1.slice(1)} Headlines</h3>
          
          <div className="row ">
          <div className='text-center spinner'>
          {this.state.loading && <Spinner />}
          </div>
            {!this.state.loading && this.state.articles.map(element=>{
              return  <div className="col-md-3 my-3" key={element.url}
              
              
              >
              <NewsItem source={element.source.name} author={element.author?element.author:"Shivam"} date={element.publishedAt}  title={element.title.substring(0,30)} description={element.content?element.content.substring(0,80):("Demo Demo demo demo demo Demo Demo demo demo demo Demo Demo demo demo demo Demo Demo demo demo demo Demo Demo demo demo demo").substring(0,80)} imgUrl={element.urlToImage?element.urlToImage:"https://www.businessinsider.in/photo/91462028/watch-astronaut-samantha-cristoforetti-creates-history-with-first-tiktok-video-from-international-space-station.jpg?imgsize=32384"} newsurl={element.url}/>
              </div>
            })}
       
          </div>
            <div className="btn_flex">
              <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.prevClick}>&larr; Previous</button>
              <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} type='button' className='btn btn-dark' onClick={this.nextClick}>&rarr; Next</button>
            </div>
      </div>
    )
  }
}

export default News