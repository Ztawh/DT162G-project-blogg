
const Button = (props) => {
    return (
        // Set color from color, toggle, class and title from props
        <button className={props.class} style = {{backgroundColor: props.color}} onClick={props.onToggle}>{props.title}</button>
    )
}

export default Button
