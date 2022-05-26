
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/navbar';
import News  from './components/News';
// import './components/style.css'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";

export default class App extends Component {

  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }
  apikey=process.env.REACT_APP_NEW_API
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='red'
        progress={this.state.progress}
        height={2}
       
        
        
      />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News apiKey={this.apikey} setProgress={this.setProgress}   key="gen"  pagesize={12} country="in" category="general"/>} />
          <Route exact path="/health" element={<News apiKey={this.apikey} setProgress={this.setProgress}  key="hel"   pagesize={12} country="in" category="health"/>} />
          <Route exact path="/science" element={<News apiKey={this.apikey} setProgress={this.setProgress}   key="scent"  pagesize={12} country="in" category="science"/>} />
          <Route exact path="/entertainment" element={<News apiKey={this.apikey} setProgress={this.setProgress}  key="ent"   pagesize={12} country="in" category="entertainment"/>} />
          <Route exact path="/technology" element={<News apiKey={this.apikey} setProgress={this.setProgress}  key="tec"   pagesize={12} country="in" category="technology"/>} />
          <Route exact path="/sports" element={<News apiKey={this.apikey} setProgress={this.setProgress}   key="sp"  pagesize={12} country="in" category="sports"/>} />
          <Route exact path="/business" element={<News apiKey={this.apikey} setProgress={this.setProgress}  key="bui"   pagesize={12} country="in" category="business"/>} />
         
</Routes>
       
        </Router>
      </div>
    )
  }
}

