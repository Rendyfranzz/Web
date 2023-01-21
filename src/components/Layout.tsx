import { Footer } from "./Footer";
import Header from "./Header";


interface Page{
  children : React.ReactNode;
}
export const Layout = ({children}:Page) => {
  // const techs : any = "javascript,react"
  return (
    <>
      <Header/>
        {children}
        <Footer/>
    </>
  )
}
