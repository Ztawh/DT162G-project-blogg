// import { useState, useEffect } from "react"
// import { confirm } from "react-confirm-box"
import { Route, HashRouter, Routes } from "react-router-dom"
// import Posts from "./components/Posts"
// import Button from "./components/Button"


// import AddPost from "./components/AddPost"
// import EditPost from "./components/EditPost"
import Single from "./components/Single"

import Header from "./components/Header"
import Footer from "./components/Footer"
// import Button from "./components/Button"
import Home from "./components/Home"

function App() {

  return (
    <HashRouter>
      <Header />
      <main className="container">
      
        <h2>Min blogg h2</h2>

        <Routes>
          <Route path={"/"} exact element={<Home/>}/>
       
          <Route path={"/single/:id"} element={<Single/>} />
        </Routes>
      </main>

      <Footer />
    </HashRouter>
  )
}

export default App
