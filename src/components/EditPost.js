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

        const obj = {"_id":id, "title": title, "content": content, "date": date}

        // Add post
        // onSave({id, title, content})
        onSave({obj})

        setTitle("")
        setContent("")
    }

    return (
        // Add form
        <form onSubmit={onSubmit}>
            <label htmlFor="add-form-title">Titel</label>
            <input type="text" id="add-form-title" value={title} onChange={(e) => setTitle(e.target.value)} />

            <label htmlFor="add-form-content">Text</label>
            <textarea name="add-form-content" id="add-form-content" cols="30" rows="10" value={content} onChange={(e) => setContent(e.target.value)}></textarea>

            <input type="submit" vlaue="Spara" />

        </form>
    )
}

export default EditPost
