import { Route, HashRouter, Routes } from "react-router-dom"
import Single from "./components/Single"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"

function App() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          {/* View index (all posts) */}
          <Route path={"/"} exact element={<Home />}/>
          {/* View one post with an ID */}
          <Route path={"/single/:id"} element={<Single/>} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
