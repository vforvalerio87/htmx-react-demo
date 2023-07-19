export default function Header({ title }) {
    return(
        <head>
            <title>{title}</title>
            <script src="https://unpkg.com/htmx.org@1.9.3"></script>
        </head>
    )
}