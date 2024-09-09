import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import NewsCard from '../Components/NewsCard';

const NewsHeadlines = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); 
  const [hasMore, setHasMore] = useState(true);

  // Fetch news with useCallback
  const fetchNews = useCallback(async () => {
    setLoading(true);
    try {
      const newsapi = `https://newsapi.org/v2/top-headlines?category=business&apiKey=015540f745124341b549466673411a1e&page=${page}&pageSize=21`;
      const response = await axios.get(newsapi);
      const newArticles = response.data.articles;
      setArticles((prevArticles) => [...prevArticles, ...newArticles]);
      setHasMore(newArticles.length > 0); // Set hasMore based on the response
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  // Fetch news whenever page changes
  useEffect(() => {
    fetchNews();
  }, [fetchNews]); // Correctly add fetchNews as a dependency

  // Handle scroll event to detect when to load more items
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight - 100 && !loading && hasMore) {
      setPage((prevPage) => prevPage + 1); 
    }
  };

  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, hasMore]); 

  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      alignItems: 'flex-start', 
      justifyContent: 'center',
      padding: '20px' 
    }}>
      {articles.map((article, index) => (
        <NewsCard
          key={index}
          image={article.urlToImage}
          headline={article.title}
          content={article.description}
          url={article.url}
        />
      ))}
      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more items to load</p>}
    </div>
  );
};

export default NewsHeadlines;
