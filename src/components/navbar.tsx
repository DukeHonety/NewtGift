import SiteLogo from '../assets/img/logo.svg'
const Nav = () => {
    return (
      <div className="w-full flex justify-center h-70 text-40 font-medium items-center">
        <img src={SiteLogo} className="w-40 h-40"/>
        <label className="text-pink">Easy</label>
        <label className="text-black">Rebate</label>
      </div>
    )
  }
  
export default Nav;