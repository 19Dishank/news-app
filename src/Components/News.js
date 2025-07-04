import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import Loader from './Loader';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    document.title = `${capitalize(props.category)} - QuickyNews`;
    fetchNews(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const fetchNews = async (pageToFetch) => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&page=${pageToFetch}&pageSize=${props.pageSize}&apiKey=${props.apiKey}`;

    try {
      const res = await fetch(url);
      const parsedData = await res.json();

      if (parsedData.status === 'error') {
        alert(`API Error: ${parsedData.message}`);
        console.error('News API Error:', parsedData.message);
        setLoading(false);
        return;
      }

      const newArticles = parsedData.articles || [];

      setArticles((prev) =>
        pageToFetch === 1 ? newArticles : [...prev, ...newArticles]
      );
      setTotalResults(parsedData.totalResults || 0);
      setPage(pageToFetch);
    } catch (error) {
      console.error('Fetch failed:', error);
      alert("Something went wrong while fetching the news.");
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreData = () => {
    fetchNews(page + 1);
  };

  return (
    <div className="container pb-5">
      <style>{`
        .bg-grey {
          background-color: rgb(208, 211, 213);
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

      <h1 className="my-4 pt-5">QuickyNews - Top Headlines</h1>

      <div className="bg-grey text-center">
        <h1>Today's {capitalize(props.category)} News Headlines</h1>
      </div>

      {loading && articles.length === 0 ? (
        <Loader />
      ) : articles.length === 0 ? (
        <div className="text-center my-5">
          <h4>🚫 No news available at the moment.</h4>
        </div>
      ) : (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
           loader={loading && articles.length <totalResults ? <Loader /> : null}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => (
                <div key={element?.url || Math.random()} className="col-md-4 my-3">
                  <NewsItem
                    imgurl={element?.urlToImage}
                    title={element?.title || 'No Title'}
                    description={element?.description || 'No Description'}
                    newsurl={element?.url}
                    publishedAt={element?.publishedAt}
                    source={element?.source?.name || 'Unknown'}
                    author={element?.author || 'Unknown'}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

News.defaultProps = {
  category: 'general',
  pageSize: 9
};

News.propTypes = {
  category: PropTypes.string,
  pageSize: PropTypes.number,
  apiKey: PropTypes.string.isRequired
};

export default News;
