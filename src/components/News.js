import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './style.css'

export class News extends Component {
  articles=[
    {
        "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
        },
        "author": "BBC Sport",
        "title": "Shane Warne memorial - watch & follow updates",
        "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
        "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
        "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
        "publishedAt": "2022-03-30T08:22:26.498888Z",
        "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
]
constructor(){
  super();
  this.state={
    articles:this.articles,
    loading:false,
    page:1
  }
  
}
async componentDidMount(){
 let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c2cffc376cf841fda2e39392378a1c2e&page=1"
 let data=await fetch(url)
 let parseData=await data.json();
//  console.log(parseData)
this.setState({articles:parseData.articles})
}

prevClick= async ()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c2cffc376cf841fda2e39392378a1c2e&page=${this.state.page-1}`
  let data=await fetch(url)
  let parseData=await data.json();
  // console.log(parseData)
 this.setState({articles:parseData.articles})
 this.setState({
   page:this.state.page-1
 })
}
nextClick= async ()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c2cffc376cf841fda2e39392378a1c2e&page=${this.state.page+1}`
  let data=await fetch(url)
  let parseData=await data.json();
  console.log(parseData)
 this.setState({articles:parseData.articles})
 this.setState({
   page:this.state.page+1
 })
}
  render() {
       return (
      <div className='container my-3'>
          <h3>Welcome To news Monkey</h3>
          <div className="row ">
            {
            this.state.articles.map(element=>{
              return  <div className="col-md-4 my-3" key={element.url}
              
              
              >
              <NewsItem   title={element.title.substring(0,45)} description={element.content?element.content.substring(0,80):("Demo Demo demo demo demo Demo Demo demo demo demo Demo Demo demo demo demo Demo Demo demo demo demo Demo Demo demo demo demo").substring(0,80)} imgUrl={element.urlToImage?element.urlToImage:"https://static01.nyt.com/images/2022/05/06/multimedia/06DC-Waller/06DC-Waller-facebookJumbo.jpg"} newsurl={element.url}/>
              </div>
            })}
          {/* {this.state.articles.map((element)=>{
            let content=element.content.slice(0,100)
            return    <div className="col-md-4 my-3" key={element.url}>
            <NewsItem   title={element.title.substring(0,45)} description={content} imgUrl={element.urlToImage} newsurl={element.url}/>
            </div>
            })} */}
          </div>
            <div className="btn_flex">
              <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.prevClick}>&larr; Previous</button>
              <button type='button' className='btn btn-dark' onClick={this.nextClick}>&rarr; Next</button>
            </div>
      </div>
    )
  }
}

export default News