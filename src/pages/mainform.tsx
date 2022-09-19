import bgImg from '../assets/img/mainimg.png';
import bgTopImg from '../assets/img/righttop.svg';
import bgBottomImg from '../assets/img/leftbottom.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export const MainForm = () => {
  return (
    <div className="w-full h-screen max-h-[1060px] overflow-hidden">
      <div className="absolute w-full h-full max-h-[1060px] bg-gradient-to-r from-blue/10 to-blue/10 flex items-center justify-center left-0 overflow-hidden">
        <img src={bgImg} className="h-960 p-25"/>
        <img src={bgTopImg} className="absolute top-0 right-0 h-960"/>
        <img src={bgBottomImg} className="absolute bottom-0 left-0 h-960"/>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="max-w-680 bg-white/15 p-40 rounded-30 backdrop-blur-24">
          <div className="flex flex-col justify-center font-merriweather">
            <p className="text-26 font-bold text-center text-salute">Fill Out The Form Below To Redeem</p>
            <p className="text-26 font-bold text-center text-salute">Your Reward!</p>
            <p className="text-16 text-center text-pink my-35">No Strings Attached | No Credit Card Required!</p>
          </div>
          <div className="font-dmsans">
            <input type="text" className="w-full h-70 text-salute text-20 rounded-12 my-20 border border-violetwatter focus:border-violetwatter text-center" placeholder='NAME'/>
            <input type="text" className="w-full h-70 text-salute text-20 rounded-12 my-20 border border-violetwatter focus:border-violetwatter text-center" placeholder='Amazon Order Number'/>
            <button type="button" className="w-full h-70 text-white text-24 font-bold font-sans bg-gradient-to-r from-pinkorange to-pinkocd rounded-12 my-20">CLAIM!</button>
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