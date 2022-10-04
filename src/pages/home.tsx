import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { homeInfoProp } from '../core/interface';
import { projectInfos } from '../core/home';
import MainForm from './mainform';

const HomePage = () => {
  return (
    <div>
      <MainForm />
      <div className='max-w-[1350px] mx-auto'>
        <div className="text-48 font-bold text-center my-80 font-merriweather text-salute">Frequently Asked Questions</div>
        <Grid container spacing={2}>
          {
            projectInfos.map((info:homeInfoProp, index:number) => {
              return (
                <Grid item lg={6} md={6} sm={12} xs={12} className="relative p-40 mt-80 rounded-15 shadow-homeinfo" key={index}>
                  <div className="absolute -top-40 w-80 h-80 bg-pink rounded-15 flex justify-center items-center shadow-homeinfoicon mb-24">
                    <img src={info.img} className="w-42 h-37"/>
                  </div>
                  <p className="text-26 font-bold text-tristesse my-16 text-merriweather flex items-center">
                    {info.title}
                    <div className="ml-10 rounded-full text-12 font-bold w-23 h-23 border-3 border-pink text-pink flex items-center justify-center"><FontAwesomeIcon icon={faArrowRight} /></div>
                  </p>
                  <p className="text-16 text-nightpurple text-dmsans">{info.description}</p>
                </Grid>
              );
            })
          }            
        </Grid>
      </div>
      <div className="mt-70 bg-gradient-to-r from-pinkorange/10 to-pinkocd/10 p-40">
        <div className='max-w-[1510px] mx-auto text-center text-24 font-medium text-salute/80'>
          <p><span className="text-24 font-bold text-salute">* *Conditions Apply</span>: ONLY valid in the 48 contiguous U.S. states. Limited to one free bottle of each product per Amazon account and household. Offer valid only for customers that purchased the product at full price from the official seller account on <span className="text-pink">Amazon.com</span>. To qualify, applicants need to complete our feedback survey on the product they have been using for the previous 7 days or more.</p>
          <p className="text-center text-28 font-bold text-salute my-15">Offer available to U.S residents only.</p>
          <p>This offer is not dependent on leaving a review on any place nor the quality or manner of feedback that you provide.</p>
        </div>
      </div>
      <div className="p-20 text-center bg-grey text-white text-16 font-medium">
        © 2022 EasyRebate. All rights reserved.
      </div>
    </div>
  )
}

export default HomePage;