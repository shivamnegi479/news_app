
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/navbar';
import News from './components/News';
// import './components/style.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News  key="gen"  pagesize={12} country="in" category="general"/>} />
          <Route exact path="/health" element={<News key="hel"   pagesize={12} country="in" category="health"/>} />
          <Route exact path="/science" element={<News  key="scent"  pagesize={12} country="in" category="science"/>} />
          <Route exact path="/entertainment" element={<News key="ent"   pagesize={12} country="in" category="entertainment"/>} />
          <Route exact path="/technology" element={<News key="tec"   pagesize={12} country="in" category="technology"/>} />
          <Route exact path="/sports" element={<News  key="sp"  pagesize={12} country="in" category="sports"/>} />
          <Route exact path="/business" element={<News key="bui"   pagesize={12} country="in" category="business"/>} />
         
</Routes>
       
        </Router>
      </div>
    )
  }
}

