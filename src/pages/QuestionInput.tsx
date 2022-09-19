import { useState } from 'react';
import { Link } from 'react-router-dom'
import bgImg from '../assets/img/mainimg.png';
import bgTopImg from '../assets/img/righttop.svg';
import bgBottomImg from '../assets/img/leftbottom.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const QuestionInput = () => {
  const btnStyle = 'w-full h-70 text-salute text-20 font-medium rounded-12 my-20 border border-violetwatter text-center hover:bg-salute/10 ';
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
            <p className="text-26 font-bold text-center text-salute">Questions, Comments, Concerns</p>
          </div>
          <div className="font-dmsans mt-20 mx-20">
            <textarea placeholder='OPTIONAL' className="h-160 w-full text-center font-dmsans text-20">
            </textarea>
            <Link to="/reward"><button type="button" className="w-full h-70 text-white text-24 font-bold font-sans bg-gradient-to-r from-pinkorange to-pinkocd rounded-12 my-20">NEXT</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionInput;