import Post from "./Post"
const Posts = ({posts, onDelete, onEdit}) => {
    return (
        <>
            {/* Loop through all posts. Every post gets a key value and props */}
            {posts.map((post) => (
                <Post key={post._id} post={post} onDelete={onDelete} onEdit={onEdit}/>
            ))}
        </>
    )
}

export default Posts
