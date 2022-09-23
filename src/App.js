import './App.css';
import React, { Component } from 'react'
import News from './components/News';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 12;
  apiKey = "8e5e49d70d424f01a4cf00659a19cbf4";
  state = {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress});
  }
  render() {
    document.body.style.background = "#e3f2fd";
    // React did no re-mount the component with updated props when new link is clicked  
    // passing a unique key prop in news component will resolve this problem
    return (
      <BrowserRouter>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <NavBar title='DailyNews'/>
        <Routes>
          <Route path='/' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />} exact />
          <Route path='/business' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business" />} exact />
          <Route path='/entertainment' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} exact />
          <Route path='/health' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health" />} exact />
          <Route path='/science' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science" />} exact />
          <Route path='/sports' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" />} exact />
          <Route path='/technology' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology" />} exact />
        </Routes>
      </BrowserRouter>
    )
  }
}