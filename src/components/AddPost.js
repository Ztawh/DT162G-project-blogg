import { useState } from "react"

const AddPost = (props) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title || !content){
            alert("Du måste fylla i alla fält.")
            return
        }

        props.onAdd({title, content})

        setTitle("")
        setContent("")
    }

    return (
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
