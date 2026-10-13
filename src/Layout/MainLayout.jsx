import { useLocation } from "react-router-dom"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import { AppRouter } from "../RouterDom/AppRouter"

export const MainLayout = ()=>{

    let location = useLocation()

    let path = ['/userform']

    let findPath = path.includes(location.pathname)

    return(
        <>

            {!findPath && <Header />}
        <AppRouter />
            {!findPath && <Footer />}

        </>
    )
}