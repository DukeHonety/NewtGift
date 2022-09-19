import bgImg from '../assets/img/mainimg.png'
import bgTopImg from '../assets/img/righttop.svg'
import bgBottomImg from '../assets/img/leftbottom.svg'
export const HomePage = () => {
  return (
    <div>
      <div>
        <div className="absolute w-full bg-gradient-to-r from-blue/10 to-blue/10 flex items-center justify-center top-70 left-0">
          <img src={bgImg} className="h-960 max-h-screen m-25"/>
          <img src={bgTopImg} className="absolute top-0 right-0 h-960"/>
          <img src={bgBottomImg} className="absolute bottom-0 left-0 h-960"/>
        </div>
        <div className="w-full">
          hello world
        </div>
      </div>
      <div>
        <div className="text-48 font-bold text-center">Frequently Asked Questions</div>
        
      </div>
    </div>
  )
}