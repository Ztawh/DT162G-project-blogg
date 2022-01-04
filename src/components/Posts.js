import Post from "./Post"
const Posts = ({posts, onDelete}) => {
    return (
        <>
            {posts.map((post) => (
                <Post key={post._id} post={post} onDelete={onDelete}/>
            ))}
        </>
    )
}

export default Posts
