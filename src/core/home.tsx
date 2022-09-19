import { homeInfoProp } from "./interface";
import detailImg1 from "../assets/img/home/info1.svg";
import detailImg2 from "../assets/img/home/info2.svg";
import detailImg3 from "../assets/img/home/info3.svg";
import detailImg4 from "../assets/img/home/info4.svg";

export const projectInfos:homeInfoProp[] = [
    {
        img: detailImg1,
        title: 'Is it really FREE?',
        description: 'Yes it\'s totally free and no, you don\'t pay anything. All we\'ll ask for is your Amazon order number so we know where to send your free bottle out to. We\'ll even pay for the shipping.'
    },
    {
        img: detailImg2,
        title: 'Is it really FREE?',
        description: 'There isn\'t one! We only ask that you give us private feedback about the product you purchased (only takes 1 minute) so we can continuously improve our products to meet the needs of our customers.'
    },
    {
        img: detailImg3,
        title: 'Do I qualify?',
        description: 'Offer is for USA residents only. This offer is valid only for customers that bought the product at full price, from our Official Newt Nutrition store on Amazon.com.'
    },
    {
        img: detailImg4,
        title: 'Is it Long Process?',
        description: 'If you qualify, we will ship your FREE product within 2 business days, and you should receive it within 3-6 business days from our Official Newt Nutrition store on Amazon.com.'
    }
];