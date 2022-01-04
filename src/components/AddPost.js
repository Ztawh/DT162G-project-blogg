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

        // Add post
        props.onAdd({title, content})

        setTitle("")
        setContent("")
    }

    return (
        // Add form
        <form onSubmit={onSubmit}>
            <label htmlFor="add-form-title">Titel</label>
            <input type="text" id="add-form-title" vlaue={title} onChange={(e) => setTitle(e.target.value)} />

            <label htmlFor="add-form-content">Text</label>
            <textarea name="add-form-content" id="add-form-content" cols="30" rows="10" value={content} onChange={(e) => setContent(e.target.value)}></textarea>

            <input type="submit" vlaue="Spara" />

        </form>
    )
}

export default AddPost
