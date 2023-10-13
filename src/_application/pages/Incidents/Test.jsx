
import Page from '@app/pages/Page.jsx';
import IncidentsDisplay from '@dom/Incidents/views/IncidentsDisplay.jsx';

const Test = () => {

  const TEMPLATE = (
    <Page>
      <IncidentsDisplay title="Test Page"/>
    </Page>
  );

  return TEMPLATE;
}

export default Test;