import { useState } from "react"

const AddPost = (props) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    // Prevent default submit
    const onSubmit = (e) => {
        e.preventDefault()

        // Check if all fields are filled
        if(!title || !content){
            alert("Du måste fylla i alla fält.")
            return
        }

        // Values to addPost
        props.onAdd({title, content})

        // Reset form
        setTitle("")
        setContent("")
    }

    return (
        <>
        <h2>Nytt inlägg</h2>
        {/* Add form */}
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

export default AddPost
