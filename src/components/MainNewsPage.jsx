import React, { useEffect, useState } from 'react'
import NewsPage2 from './Catagary'
import NewsPage from './NewsPage'

const MainNewsPage = () => {
  const newsPage2 = <NewsPage2 />
  const newsPage = <NewsPage />
  const [da, setDa] = useState(newsPage)
  //   const handleClick = (e) => {
  //       console.log(e)
  //       if (e.target.className === "nav-link active") {
  //         if(e.target.innerText === "Top Headlines"){

  //         }
  //       }
  //       //if (e.target.innerText === "Catagary Nesw Page") { console.log(e.target.innerTex) }
  //     }
  useEffect(() => {
    handleClick()
  })
  const handleClick = (e) => {
    if(e){
      if(e.target.innerHTML==="Top Headlines"){setDa(newsPage)}
      if(e.target.innerHTML==="category Nesw Page"){setDa(newsPage2)}
      
    }

  
        // if (e.target.innerText === "Top Headlines") return (console.log("clicked 1"))
        // if (e.target.innerText === "Catagary Nesw Page") return (console.log("clicked 1"))
   

  }



  return (<>

    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">NavbarIcon</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span onClick={handleClick} className="nav-link active" >Top Headlines</span>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={handleClick} >category Nesw Page</span>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" disabled />
              <button className="btn btn-outline-success" type="submit" disabled>Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
    <div>
      {da}

    </div>
  </>)
}

export default MainNewsPage
