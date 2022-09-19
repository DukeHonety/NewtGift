import SiteLogo from '../assets/img/logo.svg'
const Nav = () => {
    return (
      <div className="w-full flex justify-center h-70 text-32 items-center font-calistoga">
        <img src={SiteLogo} className="w-40 h-40"/>
        <label className="text-pink">newt</label>
        <label className="text-black">nutrition</label>
      </div>
    )
  }
  
export default Nav;