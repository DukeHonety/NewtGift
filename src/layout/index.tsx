import Nav from "../components/navbar";

const Layout = ({children}:{children:any}) => {
    return (
        <div className='w-full'>
            <Nav/>
            <div className="w-full">{children}</div>
        </div>
    )
}
export default Layout;