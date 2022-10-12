import AppBar from "./AppBar";
import BannerTop from "./BannerTop";

const Layout = ({children}) =>{
    return(
        <div>
            <BannerTop/>
            <AppBar/>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;