import React,{useState, useEffect} from 'react';
import business from '../jsonData/business';
import entertainment from "../jsonData/entertainment"
import general from '../jsonData/general';
import health from '../jsonData/health';
import science from '../jsonData/science';
import sports from '../jsonData/sports';
import technology from '../jsonData/technology';

import CatgNewsItem from './CatgNewsItem';


const NewsPage2 = () => {
    
    const [apiData,setApiData] = useState([]);
    const getUserData = async () => {
        try{
            setApiData(business.articles)
            //console.log([business.articles]);
        
        }catch(err){
        console.log(err)
        }
    } 
    const handleClick =(e)=>{
           console.log(e.target.innerHTML);
           if(e.target.innerHTML==="business"){setApiData(business.articles)}
           if(e.target.innerHTML==="entertainment"){setApiData(entertainment.articles)}
           if(e.target.innerHTML==="general"){setApiData(general.articles)}
           if(e.target.innerHTML==="health"){setApiData(health.articles)}
           if(e.target.innerHTML==="science"){setApiData(science.articles)}
           if(e.target.innerHTML==="sports"){setApiData(sports.articles)}
           if(e.target.innerHTML==="technology"){setApiData(technology.articles)}
           
           
           
        };
    useEffect(()=>{
        getUserData()
    },[]);

    
    
    return (
        <><div className='cah'>
            <h2>News from category newspage2</h2>
            <div className='container'>
                
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-business-tab" data-bs-toggle="tab" data-bs-target="#nav-business" type="button" role="tab" aria-controls="nav-business" aria-selected="true" onClick={handleClick}>business</button>
                        <button className="nav-link" id="nav-entertainment-tab" data-bs-toggle="tab" data-bs-target="#nav-entertainment" type="button" role="tab" aria-controls="nav-entertainment" aria-selected="true" onClick={handleClick}>entertainment</button>
                        <button className="nav-link" id="nav-general-tab" data-bs-toggle="tab" data-bs-target="#nav-general" type="button" role="tab" aria-controls="nav-general" aria-selected="true" onClick={handleClick}>general</button>
                        <button className="nav-link" id="nav-health-tab" data-bs-toggle="tab" data-bs-target="#nav-health" type="button" role="tab" aria-controls="nav-health" aria-selected="true" onClick={handleClick}>health</button>
                        <button className="nav-link" id="nav-science-tab" data-bs-toggle="tab" data-bs-target="#nav-science" type="button" role="tab" aria-controls="nav-science" aria-selected="true" onClick={handleClick}>science</button>
                        <button className="nav-link" id="nav-sports-tab" data-bs-toggle="tab" data-bs-target="#nav-sports" type="button" role="tab" aria-controls="nav-sports" aria-selected="false" onClick={handleClick}>sports</button>
                        <button className="nav-link" id="nav-technology-tab" data-bs-toggle="tab" data-bs-target="#nav-technology" type="button" role="tab" aria-controls="nav-technology" aria-selected="false" onClick={handleClick}>technology</button>
                        {/* <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" onClick={handleClick}>Contact</button> */}
                    </div>
                </nav>
                
            </div>
            <div className='container'>
                <div className='row row-cols-4'>

                {
                   apiData.map((props,i)=>{
                       return(<>
                                    <CatgNewsItem key={i} {...props}/>

                                    
                                {/* <div className='col'>
                                    <div className="card" style={{width: "18rem"}}>
                                        <img src={props.urlToImage} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{props.title}</h5>
                                            <p className="card-text">{props.content}</p>
                                            <p className="card-text">{props.description}</p>
                                            <a href={props.url} className="btn btn-primary" target="_blank" >Read More</a>
                                        </div>
                                    </div>
                                </div> */}
                                </>)
                   })

                }
                </div>
            </div></div>
        </>
  )


  
  
  
}

export default NewsPage2

//const [cat,setCat] = useState("science");
//const url = `https://newsapi.org/v2/top-headlines?category=${cat}&apiKey=6ea36a932fed4b7f890c403e81b36077`;
//const response = await fetch(url);
//const myData = await response.json();
//setApiData(myData.articles);


