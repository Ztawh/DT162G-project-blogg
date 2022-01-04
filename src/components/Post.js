import Button from "./Button"
const Post = ({post, onDelete}) => {
    return (
        <div className="post">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <span>{post.date}</span>
            {/* <Button color="blue" title="visa mer" /> */}
            <Button color="red" title="radera" onDelete={onDelete} id={post._id}/>
        </div>
    )
}

export default Post
