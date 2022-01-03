
const Button = (props) => {
    return (
        <button className="btn" style = {{backgroundColor: props.color}}>{props.title}</button>
    )
}

export default Button
