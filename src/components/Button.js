
const Button = (props) => {
    return (
        <button className="btn" style = {{backgroundColor: props.color}} onClick={() => props.onDelete(props.id)}>{props.title}</button>
    )
}

export default Button
