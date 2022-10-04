import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { BackgroundImg } from "./background";

const MainForm = () => {
  return (
    <div className="w-full h-screen min-h-[860px] overflow-hidden">
      <BackgroundImg />
      <div className="w-full h-full flex justify-center items-center">
        <div className="max-w-680 bg-white/15 p-40 mx-25 rounded-30 backdrop-blur-24">
          <div className="flex flex-col justify-center font-merriweather">
            <p className="text-20 md:text-26 font-bold text-center text-salute">Fill Out The Form Below To Redeem</p>
            <p className="text-20 md:text-26 font-bold text-center text-salute">Your Reward!</p>
            <p className="text-16 md:text-14 text-center text-pink my-35">No Strings Attached | No Credit Card Required!</p>
          </div>
          <div className="font-dmsans">
            <input type="text" className="w-full h-55 md:h-70 text-salute text-20 font-medium rounded-12 my-20 border border-violetwatter text-center tracking-9" placeholder='NAME'/>
            <input type="text" className="w-full h-55 md:h-70 text-salute text-20 font-medium rounded-12 my-20 border border-violetwatter text-center tracking-9 leading-120 uppercase" placeholder='Amazon Order Number'/>
            <Link to="/recentuse"><button type="button" className="w-full h-70 text-white text-24 font-bold font-sans bg-gradient-to-r from-pinkorange to-pinkocd rounded-12 my-20 tracking-4">CLAIM!</button></Link>
          </div>
          <div className="flex font-dmsans">
            <p><FontAwesomeIcon icon={faCircleInfo} className="mr-10"/></p>
            <p className="text-20 text-salute">
              We don't share your personal info with anyone. Check out our <span className="text-pink">Privacy Policy</span> for more information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainForm;