import React, {lazy,Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './layout';
import { HomePage } from './pages/home';
const App = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export default App;
