import React, {lazy,Suspense} from 'react';
import { RouterProvider } from "react-router-dom";
import './App.css';
import Layout from './layout';
import { siteRouter } from './core/base';
// import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const App : React.FC = () => {
  return (
    // <StyledEngineProvider injectFirst>
      <Layout>
        <RouterProvider router={siteRouter} />
      </Layout>
    // </StyledEngineProvider>
  );
}

export default App;
