import { useState, useEffect } from "react"
import { confirm } from "react-confirm-box"
import Posts from "./Posts"
import Button from "./Button"
import AddPost from "./AddPost"
import EditPost from "./EditPost"

const Home = () => {
    const [showAddForm, setShowAddForm] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)
    let [posts, setPosts] = useState([])
    const [editingPost, setEditingPost] = useState([])
    // const url = "http://localhost:3000/posts"
    const url = "https://whispering-everglades-05958.herokuapp.com/posts"

    // Get posts on page load
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
            .catch(error => {
                console.log("Error: ", error)
            })
    }, [])

    // Get posts function
    const getPosts = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
            .catch(error => {
                console.log("Error: ", error)
            })
    }

    // Add Post
    const addPost = (post) => {
        // Post has object with title and content
        fetch(url, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(post),
        })
            .then(response => response.json())
            .then(data => {
                // Get posts again
                getPosts()
                // Update state posts
                setPosts([...posts])
                // Hide add form
                toggleForm()
            })
            .catch(error => {
                console.log("Error: ", error)
            })
    }

    // Delete post
    const deletePost = async (id) => {
        // Confirm delete with user
        const result = await confirm("Är du säker på att du vill radera det här inlägget?")

        if (result) {
            console.log("delete", id)
            // Delete post
            fetch(url + "/" + id, {
                method: "DELETE",
            })
                .then(response => response.json())
                .then(data => {
                    // Get all posts again
                    getPosts()
                    // Update state posts
                    setPosts([...posts])
                })
                .catch(error => {
                    console.log("Error: ", error)
                })
        } else {
            return
        }
    }

    // Set post to update
    const editPost = (post) => {
        setShowEditForm(!showEditForm)
        setEditingPost(post)
    }

    // Update post
    const updatePost = (post) => {
        // Create object with new data
        const postBody = { "title": post.obj.title, "content": post.obj.content, "date": post.obj.date }

        // Update with the post id
        fetch(url + "/" + post.obj._id, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(postBody),
        })
            .then(response => response.json())
            .then(data => {
                // Get posts again
                getPosts()
            })
            .catch(error => {
                console.log("Error: ", error)
            })

        // Hide edit form
        setShowEditForm(!showEditForm)
    }

    const toggleForm = () => {
        // Sets showAddForm to opposite of what it is now (true  or false)
        setShowAddForm(!showAddForm)
    }

    return (
        <>
            {/* Print add button. If add form is visible, button is red and says "avbryt", else it's blue and it says "Nytt inlägg"*/}
            <Button class="add-btn btn" color={showAddForm ? "#ad3700" : "#09628b"} title={showAddForm ? "Avbryt" : "Nytt inlägg"} onToggle={toggleForm} />

            {/* If showAddFrom is true, show form */}
            {showAddForm ? <div><AddPost onAdd={addPost} /></div> : false}

            {/* If showEditForm is true, show form and button */}
            {showEditForm ?
                <div className="edit-container">
                    <EditPost post={editingPost} onSave={updatePost} />
                    <Button class="edit-btn btn" color="#ad3700" title="Avbryt" onToggle={() => {
                        setShowEditForm(!showEditForm)
                    }} />
                </div>
                : false}

            {/* All posts */}
            <section>
                <h2 className="all-posts-h2">Alla inlägg</h2>
                <div className="posts-container">
                    <Posts posts={posts} onDelete={deletePost} onEdit={editPost} />
                </div>
            </section>
        </>
    )
}

export default Home
