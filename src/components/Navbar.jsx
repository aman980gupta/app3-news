import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const page = [document.getElementsByClassName("nav-link")]
  const [head,setHead] = useState("Top Headlines")
  const[cat,setCat] = useState("Catagary Nesw Page")
 
useEffect(()=>{
  handleClick()
})


  const handleClick = (e) => {
    console.log("clicked")
    // if (e.target.innerText === "Top Headlines") { console.log(head) }
    // if (e.target.innerText === "Catagary Nesw Page") { console.log(cat) }
  }

  return (
    <>
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
                <span className="nav-link" onClick={handleClick} >Catagary Nesw Page</span>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" disabled />
              <button className="btn btn-outline-success" type="submit" disabled>Search</button>
            </form>
          </div>
        </div>
      </nav>

      
    </>
  )
}

export default Navbar
