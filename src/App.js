import React, { useState } from 'react';
import { News } from './SearchNews';
import { NewsForm } from './NewsForm';
export default function App() {
  const [query, setQuery] = useState();
  const [limit, setLimit] = useState(10);
  const topics = [
    {
      id: 1,
      name: 'Bitcoin',
      value: 'bitcoin',
    },
    {
      id: 2,
      name: 'USA',
      value: 'usa',
    },
    {
      id: 3,
      name: 'Business',
      value: 'business',
    },
    {
      id: 4,
      name: 'India',
      value: 'india',
    },
    {
      id: 5,
      name: 'Crime',
      value: 'crime',
    },
    {
      id: 6,
      name: 'War',
      value: 'war',
    },
    {
      id: 7,
      name: 'Sports',
      value: 'sports',
    },
    {
      id: 8,
      name: 'Education',
      value: 'education',
    },
  ];
  const searchTopics = (e) => {
    let queValue=e.target.value;
    queValue.toLowerCase();
    setQuery(queValue);
  };

  const topicsItems = topics.map((item) => (
    <button style={{ textAlign: 'center',color:'blue' }} className="btn btn-outer-primary" key={item.id} onClick={searchTopics} value={item.value}>
      {item.name}
    </button>
  ));
  const searchValues = (value) =>{
    setQuery(value.que);
    setLimit(value.lim);
  }
  return (
    <div className='container'>
      <h1 style={{ textAlign: 'center' }}>News App</h1>
      <NewsForm queries={query} searchhandler={searchValues} />
      <hr />
      <div>{topicsItems}</div>
      <hr />
      <News query={query} limit={limit}/>
    </div>
  );
}