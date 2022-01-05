//import Button from "./Button"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// import { TextTruncate } from "react-text-truncate"


const Post = ({ post, onDelete, onEdit }) => {
    const [date] = useState(new Date(post.date).getDate());
    const [month, setMonth] = useState(new Date(post.date).getMonth());
    const [year] = useState(new Date(post.date).getFullYear());

    // Set month name
    useEffect(() => {
        const months = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"]
        setMonth(months[month])
    }, [])

    return (
        <div className="post">
            <h4>{post.title}</h4>
            <p>{post.content.length > 200 ? post.content.slice(0, 197) + "..." : post.content}</p>

            {/* <TextTruncate
                line={1}
                truncateText="…"
                text="hej"
            /> */}

            <span>{year} {month} {date}</span>
            {/* <Button color="blue" title="visa mer" /> */}
            {/* <Button color="red" title="radera" onDelete={onDelete} id={post._id}/> */}
            <button className="del-btn" style={{ backgroundColor: "red" }} onClick={() => onDelete(post._id)}>radera</button>
            <button className="edit-btn" style={{ backgroundColor: "steelblue" }} onClick={() => onEdit(post)}>redigera</button>
            {/* <button className="show-more-btn" style = {{backgroundColor: "orange"}} onClick={() => onShowMore(post)}>visa mer</button> */}
            <Link to={"/single/" + post._id}>Läs mer</Link>
        </div>
    )
}

export default Post
