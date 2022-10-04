import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { BackgroundImg } from './background';

const PhoneInput = () => {
  return (
    <div className="w-full h-screen min-h-[860px] overflow-hidden">
      <BackgroundImg />
      <div className="w-full h-full flex justify-center items-center">
        <div className="max-w-680 bg-white/15 p-40 rounded-30 backdrop-blur-24">
          <div className="flex flex-col justify-center font-merriweather my-20">
            <p className="text-30 font-bold text-center text-salute">Please provide your phone number</p>
          </div>
          <div className="font-dmsans">
            <input type="text" className="w-full h-70 text-salute text-20 rounded-12 my-20 border border-violetwatter focus:border-violetwatter text-center" placeholder='PHONE NUMBER'/>
            <Link to="/email"><button type="button" className="w-full h-70 text-white text-24 font-bold font-sans bg-gradient-to-r from-pinkorange to-pinkocd rounded-12 my-20">NEXT</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneInput;