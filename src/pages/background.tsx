
import bgImg from '../assets/img/mainimg.png';
import bgTopImg from '../assets/img/righttop.svg';
import bgBottomImg from '../assets/img/leftbottom.svg';

export const BackgroundImg = () => {
	return (
		<div className="absolute w-full h-full min-h-[860px] bg-gradient-to-r from-blue/10 to-blue/10 flex items-center justify-center left-0 overflow-hidden">
			<img src={bgImg} className="min-h-760 min-w-760 p-25" />
			<img src={bgTopImg} className="absolute top-0 right-0 min-h-760 min-w-760" />
			<img src={bgBottomImg} className="absolute bottom-0 left-0 min-h-760 min-w-760" />
		</div>
	)
}