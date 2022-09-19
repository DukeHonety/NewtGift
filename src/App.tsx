import React, {lazy,Suspense} from 'react';
import { RouterProvider } from "react-router-dom";
import './App.css';
import Layout from './layout';
import HomePage from './pages/home';
import RecentUse from './pages/RecentUse';
import EnjoyType from './pages/EnjoyType';
import QuestionInput from './pages/QuestionInput';
import RewardInput from './pages/RewardInput';
import PhoneInput from './pages/PhoneInput';
import EmailInput from './pages/EmailInput';
import LastStep from './pages/LastStep';
import FinalText from './pages/FinalText';
import { siteRouter } from './core/base';
const App : React.FC = () => {
  return (
    <Layout>
      <RouterProvider router={siteRouter} />
    </Layout>
  );
}

export default App;
