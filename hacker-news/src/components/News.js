import React, { useEffect } from 'react';

import Loading from './Loading';

const url = 'https://hn.algolia.com/api/v1/search';

function News() {
  const [loading, setLoading] = React.useState(true);
  const [news, setNews] = React.useState([]);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const news = await response.json();
      setLoading(false);
      setNews(news);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return <Loading />;
  }
  console.log(news);

  return <div></div>;
}

export default News;
