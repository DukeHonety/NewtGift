import Nav from "../components/navbar";

const Layout = ({children}:{children:any}) => {
    return (
        <div className='w-full'>
            <Nav/>
            {children}
        </div>
    )
}
export default Layout;