import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const News = ({ category }) => {  // Accept category as a prop from App.js
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=be4abddc2caf434ca32ee00116e2e8f5`;

      const response = await fetch(url);
      const data = await response.json();
      setArticle(data.articles || []);  // Use empty array if no articles found
    };

    fetchNews();
  }, [category]);  // Fetch news whenever the category changes

  return (
    <>
      <div className="text-center mt-4">
        <h2>
          Latest <span className="badge bg-danger">{category.toUpperCase()} News</span>
        </h2>
      </div>
      <div className="container-fluid mt-4">
        <div className="row mx-5">
          {article.map((news, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <NewsItem
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default News;
