
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export const MainForm = () => {
  return (
    <div className="max-w-680 bg-white/15 p-40 rounded-30 backdrop-blur-24">
      <div className="flex flex-col justify-center">
        <p className="text-26 font-bold text-center text-salute">Fill Out The Form Below To Redeem</p>
        <p className="text-26 font-bold text-center text-salute">Your Reward!</p>
        <p className="text-16 text-center text-pink my-35">No Strings Attached | No Credit Card Required!</p>
      </div>
      <div>
        <input type="text" className="w-full h-70 text-salute text-20 rounded-12 my-20 border border-violetwatter focus:border-violetwatter text-center" placeholder='NAME'/>
        <input type="text" className="w-full h-70 text-salute text-20 rounded-12 my-20 border border-violetwatter focus:border-violetwatter text-center" placeholder='Amazon Order Number'/>
        <button type="button" className="w-full h-70 text-white text-24 font-bold font-sans bg-gradient-to-r from-pinkorange to-pinkocd rounded-12 my-20">CLAIM!</button>
      </div>
      <div className="flex ">
        <p><FontAwesomeIcon icon={faCircleInfo} className="mr-10"/></p>
        <p className="text-20 text-salute">
          We don't share your personal info with anyone. Check out our <span className="text-pink">Privacy Policy</span> for more information.
        </p>
      </div>
    </div>
  );
}