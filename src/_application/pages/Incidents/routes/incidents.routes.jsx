
import * as React from 'react';

const Incidents = React.lazy(() => import('@app/pages/Incidents/Incidents.jsx'));
const Test = React.lazy(() => import('@app/pages/Incidents/Test.jsx'));

const incidentsRoutes = [
  { 
    path: '/incidents',
    element: <Incidents/>
  },
  { 
    path: '/test',
    element: <Test/>
  }
];

export default incidentsRoutes;