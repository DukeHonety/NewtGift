import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { BackgroundImg } from './background';

const FinalText = () => {
  return (
    <div className="w-full h-screen min-h-[860px] overflow-hidden">
      <BackgroundImg />
      <div className="w-full h-full flex justify-center items-center">
        <div className="max-w-680 bg-white/15 p-40 px-60 rounded-30 backdrop-blur-24">
          <div className='flex flex-col justify-center mx-20'>
            <p className="text-50 font-bold text-center text-salute font-merriweather my-10">Standby!</p>
            <p className="text-26 font-bold text-center text-salute/60 font-merriweather my-10">Once our system detects the review has posted to the product page, the reward will be sent!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalText;