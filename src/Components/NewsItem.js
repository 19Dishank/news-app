import React from 'react';

const NewsItem = (props) => {
  const {
    title,
    description,
    imgurl,
    newsurl,
    source,
    author,
    publishedAt,
    mode
  } = props;

  const date = new Date(publishedAt);
  const formattedDate = isNaN(date.getTime())
    ? 'Invalid date'
    : date.toUTCString();

  // Mode-based classes
  const cardClass = mode === 'dark'
    ? 'bg-dark text-light border-light'
    : 'bg-light text-dark';

  const mutedText = mode === 'dark' ? 'text-secondary' : 'text-muted';

  return (
    <>
      <style>{`
        .news-card {
          width: 100%;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        .sizee {
          font-size: 0.9rem;
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

      <div className={`card h-100 shadow  news-card mx-auto ${cardClass}`}>
        <span class="position-absolute translate-middle badge rounded-pill start-50 bg-danger ">
    Source: {source}</span>
        <img
          src={
            imgurl ||
            'https://tse1.mm.bing.net/th/id/OIP.0dzPl0BUoR9sKlirIPvhBAHaEb?pid=Api&P=0&w=300&h=300'
          }
          className="card-img-top img-fluid news-img"
          alt="News Visual"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <h6 className={mutedText}>-{author || 'Unknown'}</h6>
          <p className="card-text text-truncate">{description}</p>
          <div>
            <span className={`sizee ${mutedText}`}>{formattedDate}</span>
            <br />
            {/* <span className={mutedText}>Source: {source}</span> */}
          </div>
          <a
            href={newsurl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary mt-auto"
          >
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
