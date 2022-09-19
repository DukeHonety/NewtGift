import {
    createBrowserRouter
} from "react-router-dom";
import HomePage from '../pages/home';
import RecentUse from '../pages/RecentUse';
import EnjoyType from '../pages/EnjoyType';
import QuestionInput from '../pages/QuestionInput';
import RewardInput from '../pages/RewardInput';
import PhoneInput from '../pages/PhoneInput';
import EmailInput from '../pages/EmailInput';
import LastStep from '../pages/LastStep';
import FinalText from '../pages/FinalText';
export const siteRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "home",
      element: <HomePage />
    },
    {
      path: "recentuse",
      element: <RecentUse/>
    },
    {
      path: "enjoy",
      element: <EnjoyType/>
    },
    {
      path: "question",
      element: <QuestionInput/>
    },
    {
      path: "reward",
      element: <RewardInput/>
    },
    {
      path: "phone",
      element: <PhoneInput/>
    },
    {
      path: "email",
      element: <EmailInput/>
    },
    {
      path: "laststep",
      element: <LastStep/>
    },
    {
      path: "final",
      element: <FinalText/>
    },
]);