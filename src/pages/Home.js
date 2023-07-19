import Button from "../components/Button.js"

export default function Home(props) {
    return(
        <>
            <h1>Home page</h1>
            <Button count={props.count} />
        </>
    )
}