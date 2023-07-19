export default function Button(props) {
    return(
        <button hx-put="/" hx-swap="outerHTML">Button has been pressed {props.count} times!</button>
    )
}