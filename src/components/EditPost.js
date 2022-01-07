import { useState } from "react"

const EditPost = ({onSave, post}) => {
    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)
    const [id] = useState(post._id)
    const [date] = useState(post.date)

    // Prevent default submit
    const onSubmit = (e) => {
        e.preventDefault()

        // Check if all fields are filled
        if(!title || !content){
            alert("Du måste fylla i alla fält.")
            return
        }

        // Create object to send to editPost
        const obj = {"_id":id, "title": title, "content": content, "date": date}

        // Add post
        onSave({obj})

        // Reset form
        setTitle("")
        setContent("")
    }

    return (
        <>
        <h2 className="edit-h2">Redigera inlägg</h2>

        {/* Edit form */}
        <form onSubmit={onSubmit}>
            <label htmlFor="add-form-title">Titel</label>
            {/* Set value when user starts typing */}
            <input type="text" id="add-form-title" value={title} onChange={(e) => setTitle(e.target.value)} />

            <label htmlFor="add-form-content">Text</label>
            {/* Set value when user starts typing */}
            <textarea name="add-form-content" id="add-form-content" cols="30" rows="10" value={content} onChange={(e) => setContent(e.target.value)}></textarea>

            <input type="submit" value="Spara" className="submit-btn" />
        </form>
        </>
    )
}

export default EditPost
