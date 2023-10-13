
import * as React from 'react';

const Home = React.lazy(() => import('@app/pages/Home/Home.jsx'));

const homeRoutes = [
  { 
    path: '/home',
    element: <Home/>
  }
];

export default homeRoutes;