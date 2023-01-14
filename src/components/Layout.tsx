import { Footer } from "./Footer";
import Header from "./Header";
import TechIcons, { TechListType } from "./icons/TechIcon";


interface Page{
  children : React.ReactNode;
}
export const Layout = ({children}:Page) => {
  // const techs : any = "javascript,react"
  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
     
      <Header/>
        {children}
        <Footer/>
    </div>
  )
}
