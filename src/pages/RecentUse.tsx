import { useState } from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { BackgroundImg } from './background';

const RecentUse = () => {
  const [status, setStatus] = useState('none');
  const btnStyle = 'w-full h-70 text-salute text-20 font-medium rounded-12 my-20 border border-violetwatter text-center hover:bg-salute/10 ';
  return (
    <div className="w-full h-screen min-h-[860px] overflow-hidden">
      <BackgroundImg />
      <div className="w-full h-full flex justify-center items-center">
        <div className="max-w-680 bg-white/15 p-40 rounded-30 backdrop-blur-24">
          <div className="flex flex-col justify-center font-merriweather">
            <p className="text-26 font-bold text-center text-salute">Have you used our product for at least 7 days?</p>
          </div>
          <div className="font-dmsans mt-20 mx-20">
            <button type="button" className={btnStyle + (status == 'yes' ? 'bg-salute/10' : '')} onClick={() => setStatus('yes')}>YES</button>
            <button type="button" className={btnStyle + (status == 'no' ? 'bg-salute/10' : '')} onClick={() => setStatus('no')}>NO</button>
            <Link to="/enjoy"><button type="button" className="w-full h-70 text-white text-24 font-bold font-sans bg-gradient-to-r from-pinkorange to-pinkocd rounded-12 my-20">NEXT</button></Link>
          </div>
          {
            status == 'none' &&
            (<div className="flex font-dmsans">
              <p className="text-sunset font-bold font-merriweather text-center">
                <FontAwesomeIcon icon={faCircleInfo} className="mr-10"/>
                You must use our product for at least 7 days to continue!
              </p>
            </div>)
          }
        </div>
      </div>
    </div>
  );
}

export default RecentUse;