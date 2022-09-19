import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from "react-router-dom";
import bgImg from '../assets/img/mainimg.png';
import bgTopImg from '../assets/img/righttop.svg';
import bgBottomImg from '../assets/img/leftbottom.svg';
import StarOnImg from '../assets/img/star_on.png';
import StarOffImg from '../assets/img/star_off.png';

const EnjoyType = () => {
  const [currentLevel, SetLevel] = useState(0);
  const starAry = [0,1,2,3,4];
  return (
    <div className="w-full h-screen max-h-[1060px] overflow-hidden">
      <div className="absolute w-full h-full max-h-[1060px] bg-gradient-to-r from-blue/10 to-blue/10 flex items-center justify-center left-0 overflow-hidden">
        <img src={bgImg} className="h-960 p-25"/>
        <img src={bgTopImg} className="absolute top-0 right-0 h-960"/>
        <img src={bgBottomImg} className="absolute bottom-0 left-0 h-960"/>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="max-w-680 bg-white/15 p-40 px-60 rounded-30 backdrop-blur-24">
          <div className="flex flex-col justify-center font-merriweather">
            <p className="text-26 font-bold text-center text-salute">Did you enjoy our product?</p>
          </div>
          <div className="my-60 flex justify-center">
          {
            starAry.map((level) => {
              return (
                <div className="cursor-pointer" onClick={() => SetLevel(level+1)}>
                  {
                    level < currentLevel && (
                      <img src={StarOnImg} className="h-85 w-85"/>
                    )
                  }
                  {
                    level >= currentLevel && (
                      <img src={StarOffImg} className="h-85 w-85"/>
                    )
                  }
                </div>
              );
            })
          }
          </div>
          <div className="font-dmsans">
            <Link to="/question"><button type="button" className="w-full h-70 text-white text-24 font-bold font-sans bg-gradient-to-r from-pinkorange to-pinkocd rounded-12 my-20">NEXT</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnjoyType;