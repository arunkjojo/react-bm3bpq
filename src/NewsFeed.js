import React from 'react';

export const NewsFeed = (props) => {
  const data=props.news;
  if (data.length > 0) {
    const imageStyle ={
      width:'150px',
      height:'auto',
    }
    return (
      <div className='container'>
        <div className="row">
          {data.map((datum, index) => {
            return (
              <div key={index} className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
                <p>#{index + 1}</p>
                <div className='image'>
                  <img src={datum.urlToImage} style={imageStyle} alt={datum.urlToImage} />
                </div>
                <div className='content'>
                  <h3>{datum.title}</h3>
                  <h6>Author: {datum.author}</h6>
                  <p>{datum.description}</p>
                  <p>{datum.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <h4 style={{ textAlign: 'center',color:'red' }}>No Data Yet</h4>;
  }
};
