

import { configureStore } from '@reduxjs/toolkit'
import navigationReducer from '@app/layouts/store/navigation.slice.js';
import dashboardReducer from '@dom/Dashboard/store/dashboard.slice.js';
import incidentsReducer from '@dom/Incidents/store/incidents.slice.js';
import React from 'react';

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    dashboard: dashboardReducer,
    incidents: incidentsReducer 
  }
})

export default store;
