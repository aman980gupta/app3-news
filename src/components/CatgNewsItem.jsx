import React from 'react';


const CatgNewsItem = (props) => {
 

  return (
    
              <div className='col my-3'>
                <div className="card" style={{width: "18rem"}}>
                  <img src={props.urlToImage} className="card-img-top" alt="..."/>
                  <div className="card-body">
                      <h5 className="card-title">{props.title}</h5>
                      <p className="card-text">{props.content}</p>
                      <p className="card-text">{props.description}</p>
                      <a href={props.url} className="btn btn-primary" target="_blank" >Read More</a>
                  </div>
                </div>
              </div>
            )
};

export default CatgNewsItem;
