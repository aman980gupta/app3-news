import React from 'react'
const NewsItem = (props) => {
  
  
  return (
    <div className='container row'>
      
      <div className="card" style={{width: "18rem"}}>
    <img src={props.src} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="/" className="btn btn-primary">Read More</a>
    </div>
</div>
    </div>
  )
}

export default NewsItem
