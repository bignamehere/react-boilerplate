
import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "@app/layouts/PublicLayout.jsx";
import DefaultLayout from "@app/layouts/DefaultLayout.jsx";

import homeRoutes from '@app/pages/Home/routes/home.routes.jsx';
import dashboardRoutes from "@app/pages/Dashboard/routes/dashboard.routes.jsx";
import incidentsRoutes from '@app/pages/Incidents/routes/incidents.routes.jsx';

const allRoutes = [
  {
    path: '/home',
    element: <PublicLayout/>,
    children: [
    ...homeRoutes
    ]
  },
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [
    ...dashboardRoutes,
    ...incidentsRoutes
    ]
  },
  { path: '*', element: `<h1>Whoops! 404</h1>`}
];

export const router = createBrowserRouter( allRoutes, { basename: import.meta.env.BASE_URL } );