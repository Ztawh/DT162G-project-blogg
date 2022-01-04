//import Button from "./Button"
const Post = ({post, onDelete, onEdit}) => {
    return (
        <div className="post">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <span>{post.date}</span>
            {/* <Button color="blue" title="visa mer" /> */}
            {/* <Button color="red" title="radera" onDelete={onDelete} id={post._id}/> */}
            <button className="del-btn" style = {{backgroundColor: "red"}} onClick={() => onDelete(post._id)}>radera</button>
            <button className="edit-btn" style = {{backgroundColor: "steelblue"}} onClick={() => onEdit(post)}>redigera</button>
        </div>
    )
}

export default Post
