import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const Single = () => {
    // Params get id from URL
    const { id } = useParams()
    const [post, setPost] = useState([]);
    const url = "http://localhost:3000/posts"

    const [day, setDate] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();

    const months = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"]

    // Get one post
    useEffect(() => {
        fetch(url + "/" + id)
            .then(response => response.json())
            .then(data => {
                setPost(data)
            })
    }, [])

    // Set date when post is updated
    useEffect(() => {
        setDate(new Date(post.date).getDate())
        setMonth(new Date(post.date).getMonth())
        setYear(new Date(post.date).getFullYear())
    }, [post])

    return (
        <div className="single-container">
            <div className="flex single-flex">
                <h2>{post.title}</h2>
                {/* Print date. Month returns a number 1-12. Print from months array att index month */}
                <div className="date-text"><b>{year} {months[month]} {day}</b></div>
            </div>
            {/* Text */}
            <p>{post.content}</p>

            {/* Go back link */}
            <Link to="/">&lt; Tillbaka</Link>
        </div>
    )
}

export default Single
