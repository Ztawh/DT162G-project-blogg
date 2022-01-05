import { useState, useEffect } from "react"
import { confirm } from "react-confirm-box"
import Posts from "./Posts"
import Button from "./Button"


import AddPost from "./AddPost"
import EditPost from "./EditPost"
// import Single from "./components/Single"

const Home = () => {

    const [showAddForm, setShowAddForm] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)
    const [posts, setPosts] = useState([])
    const [editingPost, setEditingPost] = useState([])
    // const [post, setPost] = useState([])
    const url = "http://localhost:3000/posts"

    // Get posts
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
    }, [])

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
                    console.log(data.message)
                })
        } else {
            return
        }
    }

    const editPost = (post) => {
        console.log("edit" + post._id)

        setShowEditForm(!showEditForm)
        setEditingPost(post)

    }

    // Update post
    const updatePost = (post) => {
        console.log("updating")
        console.log(post.obj._id)

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
                console.log(data.message)
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
            <Button color={showAddForm ? "red" : "green"} title={showAddForm ? "Avbryt" : "Nytt inlägg"} onToggle={toggleForm} />

            {/* If showAddFrom is true, show form */}
            {showAddForm ? <div><AddPost onAdd={addPost} /></div> : false}

            {/* If showEditForm is true, show form and button */}
            {showEditForm ?
                <div>
                    <EditPost post={editingPost} onSave={updatePost} />
                    <Button color="red" title="Avbryt" onToggle={() => {
                        setShowEditForm(!showEditForm)
                    }} />
                </div>
                : false}

            <section>
                <h3>Alla inlägg</h3>

                <div>
                    <Posts posts={posts} onDelete={deletePost} onEdit={editPost} />
                </div>
            </section>
        </>
    )
}

export default Home