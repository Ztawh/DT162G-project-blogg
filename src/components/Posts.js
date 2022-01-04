import Post from "./Post"
const Posts = ({posts, onDelete, onEdit}) => {
    return (
        <>
            {posts.map((post) => (
                <Post key={post._id} post={post} onDelete={onDelete} onEdit={onEdit}/>
            ))}
        </>
    )
}

export default Posts
