import React,{useEffect,useState} from 'react'
import CatgNewsItem from './CatgNewsItem'
import business from '../jsonData/business';
//D:\react project\app3\src\components\CatNewsPage.js

const CatNewsPage = () => {
  //const url = 

    const [apiData,setApiData] = useState([]);
    const getUserData = async () => {
        try{
        // const response = await fetch();
        // const myData = await response.json();
        // console.log(myData.articles);
        // setApiData(myData.articles);

          setApiData(business.articles)
          

        }catch(err){
        console.log(err)
        }
    } 
    
    useEffect(()=>{
        getUserData()
    },[]);
  return (
    <>
      <h2>News from Catnewspage</h2>
                {console.log(apiData)}

            <div className='container catgNewsItem'>
                <div className='row row-cols-4'>
                  {
                    apiData.map((c,i)=>{
                      return(
                        <CatgNewsItem key={i} urlToImage={c.urlToImage} title={c.title} content={c.content} description={c.description} url={c.url} />
                        
                      )
                    })
                  }

                
                
                </div>
            </div>
        </>
  )
}

export default CatNewsPage

  //const newsapiUrl = `https://newsapi.org/v2/top-headlines?category=${cat}&apiKey=6ea36a932fed4b7f890c403e81b36077`;