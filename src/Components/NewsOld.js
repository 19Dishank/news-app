import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loader from './Loader';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    category: "general",
    pageSize: 9 ,
    apiKey: "21fc994dd6554016a0eeaf6a47b4a0de"
  }
  static propTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.number,
    apiKey: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: false,
    };
    document.title=`${this.capitalize(this.props.category)} - QuickyNews`
  }
  capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

  componentDidMount() {
    this.fetchNews(this.state.page);
  }

  fetchNews = async (page) => {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&page=${page}&pageSize=${this.props.pageSize}&apiKey=${this.props.apiKey}`;
    // const url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=${this.props.pageSize}&apiKey=${this.props.apiKey}`;
    //console.log("API Key in use:", this.props.apiKey);
    
    try {
      
      const data = await fetch(url);
      const parsedData = await data.json();
      this.setState({
        articles: parsedData.articles || [],
        totalResults: parsedData.totalResults || 0,
        page: page,
        loading: false,
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error("Failed to fetch news:", error);
      this.setState({ loading: false });
    }
   

  };

  handleNext = () => {
    this.fetchNews(this.state.page + 1);
  };

  handlePrev = () => {
    if (this.state.page > 1) {
      this.fetchNews(this.state.page - 1);
    }
  };
  
  render() {
    const { page, totalResults, articles, loading } = this.state;
    const pageSize = this.props.pageSize;
    const isLastPage = page >= Math.ceil(Math.min(totalResults, 100) / pageSize);

    return (
      <div className="container pb-5">
         <style>{`
          .bg-grey {
              // background: linear-gradient(to right, #f8f9fa, #e9ecef); 
              background-color:rgb(208, 211, 213);
              padding: 2rem 1rem;
              font-family: 'Playfair Display', serif;
              color: #2c2c2c;
              border-left: 5px solid #0d6efd;
              border-right: 5px solid #0d6efd;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
              transition: background 0.3s ease-in-out;
              border-radius: 10px;
            }
        `}</style>
        
        <h1 className="my-3">QuickyNews - Top Headlines (Page {page})</h1>
        {/* Top Pagination Buttons */}
        <div className="d-flex justify-content-between my-3">
          <button className="btn btn-dark" onClick={this.handlePrev} disabled={page <= 1}>
            &larr; Previous
          </button>
          <button className="btn btn-dark" onClick={this.handleNext} disabled={isLastPage}>
            Next &rarr;
          </button>
        </div>
        <div className="bg-grey text-center">
          <h1>Today's {this.capitalize(this.props.category)} News Headlines</h1>
        </div>
        {/* Loader or News Items */}
        <div className="min-vh-50 position-relative">
          {loading ? (
            <Loader />
          ) : (
            <div className="row">
              {articles.map((element) => (
                <div key={element.url} className="col-md-4 my-3">
                  <NewsItem
                    imgurl={element.urlToImage}
                    title={element.title || 'No Title'}
                    description={element.description || 'No Description'}
                    newsurl={element.url}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                    author={element.author}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Bottom Pagination Buttons */}
        <div className="d-flex justify-content-between my-4">
          <button className="btn btn-dark" onClick={this.handlePrev} disabled={page <= 1}>
            &larr; Previous
          </button>
          <button className="btn btn-dark" onClick={this.handleNext} disabled={isLastPage}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
