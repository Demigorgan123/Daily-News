import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';
import icon from '../icons/default.png'

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      query: ''
    }
  }
  style={
    overflowY:"hidden",
    overflowX:"hidden"
  }
  updateNews = async () => {
    console.log('first');
    this.props.setProgress(10);
    console.log('1');
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}&q=${this.state.query}`;
    this.setState({ loading: true });
    console.log('2');
    let data = await fetch(url);
    console.log('second');
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    });
    this.props.setProgress(100);
    console.log('third');
  }
  // component Did Mount is called after the component is renderd
  async componentDidMount() {
    console.log('cdm b');
    this.updateNews();
    console.log('cdm a');
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    });
  };
  render() {
    console.log('render');
    return (
      <>
      <div className='container my-4'>
        <h3>Top Headlines</h3>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
          style={this.style}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((newsData) => {
                return (
                  <div className="col-md-4" key={newsData.url}>
                    <NewsItem title={newsData.title} description={newsData.description} imgUrl={newsData.urlToImage ? newsData.urlToImage : icon} newsUrl={newsData.url} date={newsData.publishedAt} source={newsData.source.name} />
                  </div>)
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
      </>
    )
  }
}
