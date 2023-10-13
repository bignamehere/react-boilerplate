
import Page from '@app/pages/Page.jsx';
import DashboardCounter from '@/_domain/Dashboard/views/DashboardCounter.jsx';

const Dashboard = () => {
  
  const TEMPLATE = (
    <Page>
      <DashboardCounter/>
    </Page>
  );

  return TEMPLATE;
};

export default Dashboard;