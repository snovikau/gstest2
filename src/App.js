import React from 'react';
import 'antd/dist/antd.css'
import { DashboardPage } from './pages/dashboard'
import GlobalStyles from './theme/globalStyles';

const App = () => (
  <>
    <GlobalStyles />
    <DashboardPage />
  </>
);

export default App;
