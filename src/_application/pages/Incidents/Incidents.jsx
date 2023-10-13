
import Page from '@app/pages/Page.jsx';
import IncidentsDisplay from '@dom/Incidents/views/IncidentsDisplay.jsx';
import DashboardCounter from '@/_domain/Dashboard/views/DashboardCounter.jsx';

const Incidents = () => {

  const TEMPLATE = (
    <Page>
      <IncidentsDisplay title="Incidents Page"/>
      <DashboardCounter/>
    </Page>
  );

  return TEMPLATE;
}

export default Incidents;