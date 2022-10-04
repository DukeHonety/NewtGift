import { Link } from 'react-router-dom';
import bgImg from '../assets/img/mainimg.png';
import bgTopImg from '../assets/img/righttop.svg';
import bgBottomImg from '../assets/img/leftbottom.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { BackgroundImg } from './background';

const EmailInput = () => {
  return (
    <div className="w-full h-screen min-h-[860px] overflow-hidden">
      <BackgroundImg />
      <div className="w-full h-full flex justify-center items-center">
        <div className="max-w-680 bg-white/15 p-40 mx-25 rounded-30 backdrop-blur-24">
          <div className="flex flex-col justify-center font-merriweather my-20">
            <p className="text-30 font-bold text-center text-salute">Please provide your Email!</p>
          </div>
          <div className="font-dmsans">
            <input type="text" className="w-full h-70 text-salute text-20 rounded-12 my-20 border border-violetwatter focus:border-violetwatter text-center" placeholder='EMAIL'/>
            <Link to="/laststep"><button type="button" className="w-full h-70 text-white text-24 font-bold font-sans bg-gradient-to-r from-pinkorange to-pinkocd rounded-12 my-20">NEXT</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailInput;