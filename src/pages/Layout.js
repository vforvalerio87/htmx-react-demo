import Head from "../components/Head.js"
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

export default function Layout({title, children}) {
    return(
        <>
            <Head title={title} />
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </>
    )
}