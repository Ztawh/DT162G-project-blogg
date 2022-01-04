
const Button = (props) => {
    return (
        <button className="btn" style = {{backgroundColor: props.color}} onClick={props.onToggle}>{props.title}</button>
    )
}

export default Button
