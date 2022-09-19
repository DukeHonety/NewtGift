import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import bgImg from '../assets/img/mainimg.png';
import bgTopImg from '../assets/img/righttop.svg';
import bgBottomImg from '../assets/img/leftbottom.svg';
import { homeInfoProp } from '../core/interface';
import { projectInfos } from '../core/home';
export const HomePage = () => {
  return (
    <div>
      <div className="w-full h-screen">
        <div className="absolute w-full h-full bg-gradient-to-r from-blue/10 to-blue/10 flex items-center justify-center left-0">
          <img src={bgImg} className="h-960 max-h-full p-25"/>
          <img src={bgTopImg} className="absolute top-0 right-0 h-960"/>
          <img src={bgBottomImg} className="absolute bottom-0 left-0 h-960"/>
        </div>
        <div className="w-full">
          
        </div>
      </div>
      <div className='max-w-[1350px] mx-auto'>
        <div className="text-48 font-bold text-center my-80">Frequently Asked Questions</div>
        <Grid container spacing={3} lg={12} md={12} sm={12} xs={12} justify="space-around">
          {
            projectInfos.map((info:homeInfoProp) => {
              return (
                <Grid item lg={6} md={6} sm={6} xs={12} className="relative p-40 mt-80 rounded-15 shadow-homeinfo" >
                  <div className="absolute -top-40 w-80 h-80 bg-pink rounded-15 flex justify-center items-center shadow-homeinfoicon mb-24">
                    <img src={info.img} className="w-42 h-37"/>
                  </div>
                  <p className="text-26 font-bold text-tristesse my-16 text-merriweather">
                    {info.title}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </p>
                  <p className="text-16 text-nightpurple text-sans">{info.description}</p>
                </Grid>
              );
            })
          }
            
        </Grid>
      </div>
    </div>
  )
}