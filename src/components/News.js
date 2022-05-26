import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import "./style.css";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [];
  constructor(props) {
    super(props);
    let myt = this.props.category;

    this.state = {
      articles: this.articles,
      loading: true,
      page: 2,
      totalResults:0
    };
    document.title = `${myt.charAt(0).toUpperCase() + myt.slice(1)} - News_App`;
  }

  // async updateNews() {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);

  //   let parseData = await data.json();
  //   //  console.log(parseData)
  //   this.setState({
  //     articles: parseData.articles,
  //     totalResults: parseData.totalResults,
  //     loading: false,
  //   });
  // }
  async componentDidMount() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30)

    let parseData = await data.json();
      //  console.log(parseData)
    this.props.setProgress(70)

    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    
    this.props.setProgress(100)
  }


 fetchMoreData=async ()=>{
    this.setState( {page:this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);

    let parseData = await data.json();
    //  console.log(parseData)
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
     
    });
  
  }
  render() {
    let myt1 = this.props.category;
    return (
      <>
        <h3 className="text-center my-4">
          News App - Top {myt1.charAt(0).toUpperCase() + myt1.slice(1)}{" "}
          Headlines
        </h3>
       <div className="text-center"> {this.state.loading && <Spinner />}</div>
            <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length!==this.state.totalResults}
            loader={<div className="spine text-center my-3"><Spinner /></div>}
          >
            <div className="container">

           
            <div className="row ">
        
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-3 my-3" key={element.url}>
                  <NewsItem
                    source={element.source.name}
                    author={element.author ? element.author : "Shivam"}
                    date={element.publishedAt}
                    title={element.title.substring(0, 30)}
                    description={
                      element.content
                        ? element.content.substring(0, 80)
                        : "Demo Demo demo demo demo Demo Demo demo demo demo Demo Demo demo demo demo Demo Demo demo demo demo Demo Demo demo demo demo".substring(
                            0,
                            80
                          )
                    }
                    imgUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://www.businessinsider.in/photo/91462028/watch-astronaut-samantha-cristoforetti-creates-history-with-first-tiktok-video-from-international-space-station.jpg?imgsize=32384"
                    }
                    newsurl={element.url}
                  />
                </div>
              );
            })}
            </div>
        </div>
          </InfiniteScroll>
        
      </>
    );
  }
}

export default News;
