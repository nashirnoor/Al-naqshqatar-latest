import Footer from "../components/user_components/footer/Footer"
import { Outlet } from "react-router-dom"
import MemoisedNavbar from "../components/user_components/navbar/Navbar"


const Layout = () =>{
    return(
        <>
        <MemoisedNavbar />
        <Outlet/>
        <Footer />
        </>
    )
}

export default Layout