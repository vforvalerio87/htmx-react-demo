export default function Header() {
    return(
        <div>
            <span>Welcome to htmx-react test</span>
            <ul hx-boost="true">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
    )
}