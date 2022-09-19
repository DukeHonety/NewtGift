import { Link } from 'react-router-dom';
import bgImg from '../assets/img/mainimg.png';
import bgTopImg from '../assets/img/righttop.svg';
import bgBottomImg from '../assets/img/leftbottom.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const LastStep = () => {
  return (
    <div className="w-full h-screen max-h-[1060px] overflow-hidden">
      <div className="absolute w-full h-full max-h-[1060px] bg-gradient-to-r from-blue/10 to-blue/10 flex items-center justify-center left-0 overflow-hidden">
        <img src={bgImg} className="h-960 p-25"/>
        <img src={bgTopImg} className="absolute top-0 right-0 h-960"/>
        <img src={bgBottomImg} className="absolute bottom-0 left-0 h-960"/>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="max-w-680 bg-white/15 p-40 px-60 rounded-30 backdrop-blur-24">
          <div className='flex flex-col justify-center mx-20'>
            <p className="text-48 font-bold text-center text-salute font-merriweather my-10">Last Step!</p>
            <p className="text-26 font-bold text-center text-salute/60 font-merriweather my-10">Leave us a review on Amazon!</p>
            <button type="button" className="p-10 text-white text-24 font-bold font-sans bg-white rounded-12 my-20"><label className="uppercase underline text-pink">Link to Product Page</label></button>
          </div>
          <div className="font-dmsans">
            <Link to="/final"><button type="button" className="w-full h-70 text-white text-24 font-bold font-sans bg-gradient-to-r from-pinkorange to-pinkocd rounded-12 my-20">FINISH</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastStep;