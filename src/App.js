import Button from "./components/Button";
import Header from "./components/Header";
import AddPost from "./components/AddPost";

function App() {
  const url = "http://localhost:3000/posts";

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
      });
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
          <div>
            <div>Inlägg 1</div>
            <p>Lite text</p>
            <span>Datum</span>
            <Button color="blue" title="visa mer" />
            <Button color="red" title="radera" />
          </div>
          <div>
            <div>Inlägg 2</div>
            <p>Lite text</p>
            <span>Datum</span>
            <Button color="blue" title="visa mer" />
            <Button color="red" title="radera" />
          </div>
        </div>
      </section>

    </main>
  );
}

export default App;
