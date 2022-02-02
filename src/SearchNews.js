import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NewsFeed } from './NewsFeed';
function propsAreEqual(prevProps, nextProps) {
  return (
    prevProps.query === nextProps.query && prevProps.limit === nextProps.limit
  );
}
export function News(props) {
  const [data, setData] = useState([]);
  const api_key = 'fc374080075b4885b33a3fb9db4a73c7';
  // const api_key_new ='5bb35b1d14e249c391c88810e4bcd42b';
  const q = props.query;
  const limit = props.limit;
  const url = `https://newsapi.org/v2/everything?q=${q}&pageSize=${limit}&sortBy=publishedAt&apiKey=${api_key}`;
  useEffect(() => {
    if (q && limit && api_key) {
      axios
        .get(url)
        .then((res) => {
          let newsData = res.data.articles;
          setData(newsData);
        })
        .catch((err) => console.log(err));
    }
  }, [q, limit]);
  return data.length > 0 ? (
    <NewsFeed news={data} />
  ) : (
    <h4 style={{ textAlign: 'center', color: 'red' }}>Search Data!!!</h4>
  );
}
export const SearchNews = React.memo(News, propsAreEqual);
