import React from 'react'

const NewsItem = (props) => {
  let { title, description, imgurl, newsurl, source, author, publishedAt } = props;
  let date = new Date(publishedAt);
  let formattedDate = isNaN(date.getTime()) ? 'Invalid date' : date.toUTCString();
  return (
    <>
      <style>{`
          .news-card {
            width: 100%;
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
          .sizee{
            font-size  : 0.9rem;
          }
          .news-img {
            height: 200px;
            width: 100%;
            object-fit: cover;
            transition: all 0.3s ease-in-out;
            background-color: transparent;
          }

          .news-img:hover {
            object-fit: contain;
            background-color: #000;
          }
        `}</style>
      <div className="card h-100 shadow news-card mx-auto">

        <img
          src={!imgurl ? "https://tse1.mm.bing.net/th/id/OIP.0dzPl0BUoR9sKlirIPvhBAHaEb?pid=Api&P=0&w=300&h=300" : imgurl}
          className="card-img-top img-fluid news-img"
          alt="No imagee available or problem occurred"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <h6 className="text-muted">-{author || "Unknown"}</h6>
          <p className="card-text text-truncate" >{description}</p>
          <div >
            <span className="text-muted sizee">{formattedDate}</span><br />
            <span className="text-muted">Source: {source}</span>
          </div>
          <a href={newsurl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary mt-auto">Read more</a>
        </div>
      </div>
    </>
  );
}

export default NewsItem