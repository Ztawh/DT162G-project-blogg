import { useState} from "react"
import { Link } from "react-router-dom"

const Post = ({ post, onDelete, onEdit }) => {
    const [date] = useState(new Date(post.date).getDate());
    const [month] = useState(new Date(post.date).getMonth());
    const [year] = useState(new Date(post.date).getFullYear());

    const months = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"]

    return (
        // Print post
        <div className="post">
            <h3>{post.title}</h3>
            {/* If post text is longer than 200 characters, then truncate the text. Else print all text. */}
            <p>{post.content.length > 200 ? post.content.slice(0, 197) + "..." : post.content}</p>

            <div className="flex date-link">
                {/* Print date. Month returns a number 1-12. Print from months array att index month */}
                <div className="date-text"><b>{year} {months[month]} {date}</b></div>
                {/* Read more link */}
                <Link to={"/single/" + post._id}>Läs mer &gt;</Link>
            </div>

            {/* Buttons delete or edit. Sends post ID */}
            <div className="btn-container">
                <button className="btn btn-del" style={{ backgroundColor: "#ad3700" }} onClick={() => onDelete(post._id)}>radera</button>
                <button className="btn btn-edit" style={{ backgroundColor: "#09628b" }} onClick={() => onEdit(post)}>redigera</button>
            </div>
        </div>
    )
}

export default Post
