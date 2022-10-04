import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { BackgroundImg } from './background';

const RewardInput = () => {
  const btnStyle = 'w-full h-70 text-salute text-20 font-medium rounded-12 my-20 border border-violetwatter text-center hover:bg-salute/10 ';
  return (
    <div className="w-full h-screen min-h-[860px] overflow-hidden">
      <BackgroundImg />
      <div className="w-full h-full flex justify-center items-center">
        <div className="max-w-680 bg-white/15 p-40 mx-25 rounded-30 backdrop-blur-24">
          <div className="flex flex-col justify-center font-merriweather">
            <p className="text-26 font-bold text-center text-salute">Questions, Comments, Concerns</p>
          </div>
          <div className="font-dmsans mt-20 mx-20">
            <Link to="/phone"><button type="button" className="w-full h-70 text-white text-24 font-bold font-sans bg-gradient-to-r from-pinkorange to-pinkocd rounded-12 my-20">TEXT</button></Link>
            <Link to="/phone"><button type="button" className="w-full h-70 text-white text-24 font-bold font-sans bg-gradient-to-r from-pinkorange to-pinkocd rounded-12 my-20">EMAIL</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RewardInput;