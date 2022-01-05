import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const Single = () => {

    const { id } = useParams()
    const [post, setPost] = useState([]);
    const url = "http://localhost:3000/posts"

    // Get post
    useEffect(() => {
        fetch(url + "/" + id)
            .then(response => response.json())
            .then(data => {
                setPost(data)
            })
    })

    return (
        <div>
            <h3>Hej single</h3>
            <h4>{id}</h4>
            <p>{post.title}</p>
            <p>{post.content}</p>

            <Link to="/">Tillbaka</Link>
        </div>
    )
}

export default Single
