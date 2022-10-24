import React,{useState, useEffect} from 'react';
const url = `newsapiLink`;
const NewsPage = () => {
    const [apiData,setApiData] = useState([]);
    const getUserData = async () => {
        try{
        const response = await fetch(url);
        const myData = await response.json();
        //console.log(myData.articles);
        setApiData(myData.articles);
        console.log(myData)
        }catch(err){
        console.log(err)
        }
        
    } 
    useEffect(()=>{
        getUserData()
    },[]);

    
    
    return (
        <>
            <h2>News from Top Headlines</h2>
            <div className='container'>
                <div className='row row-cols-4'>

                {
                    apiData.map((value,i)=>{
                        return(
                            <>
                                <div className='col' key={i}>
                                    <div className="card" style={{width: "18rem"}}>
                                        <img src={value.urlToImage} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{value.title}</h5>
                                            <p className="card-text">{value.content}</p>
                                            <p className="card-text">{value.description}</p>
                                            <a href={value.url} className="btn btn-primary" target="_blank" >Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })

                }
                </div>
            </div>
        </>
  )
}

export default NewsPage
