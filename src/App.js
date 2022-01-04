import { useState, useEffect } from "react"
import Posts from "./components/Posts"
import Button from "./components/Button"
import Header from "./components/Header"
import AddPost from "./components/AddPost"

function App() {

  const [posts, setPosts] = useState([])
  const url = "http://localhost:3000/posts"

  // Get Posts
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      data.forEach(post => {
        //console.log(post.title + " " + post.content)
        setPosts(data)
      })
    })
  })

  // Add Post
  const addPost = (post) => {
    console.log("Lägger till inlägg. Rubrik: " + post.title + " Innehåll: " + post.content)

    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message)
      })
  }

  const deletePost = (id) => {
    console.log("delete", id)
  }

  return (
    <main className="container">
      <Header />

      <h2>Min blogg h2</h2>
      <Button color="green" title="Lägg till" />

      <AddPost onAdd={addPost} />

      <section>
        <h3>Alla inlägg</h3>

        <div>
          <Posts posts={posts} onDelete={deletePost}/>
        </div>
      </section>

    </main>
  )
}

export default App
