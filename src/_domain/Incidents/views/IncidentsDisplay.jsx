
import { useSelector, useDispatch } from "react-redux";
import {
  getIncidentsItemsAllItems,
  getIncidentsItemsStuff,
  getIncidentsItemsStatus,
  getIncidentsItemsErrors,
  getIncidentsItemsThunk,
  getItemsCount,
  updateTotalCount } from "@dom/Incidents/store/incidents.slice.js";

const IncidentsDisplay = (_props) => {

  const dispatch = useDispatch();

  const incidentsAllItems = useSelector(getIncidentsItemsAllItems);
  const incidentsStuff = useSelector(getIncidentsItemsStuff);
  const incidentsStatus = useSelector(getIncidentsItemsStatus);
  const incidentsErrors = useSelector(getIncidentsItemsErrors);
  const totalItems = useSelector(getItemsCount);


  const items = incidentsAllItems.map( (item) => 
    <li key={ item.id }>{ item.title }</li>
  );

  const updateTotal = () => {
    dispatch(updateTotalCount());
  }

  const getIncidents = async () => {
    dispatch( getIncidentsItemsThunk() );
  }

  return (
    <>
      <h1>{ _props.title || 'Page Header' }</h1>
      

      <div className="fam-box fam-m-t--m fam-m-b--m">

        <div className="fam-level">
          <div className="fam-m--s">Stuff: <strong>{ incidentsStuff.total }</strong></div>
          <div className="fam-m--s">Status: <strong>{ incidentsStatus }</strong></div>
          <div className="fam-m--s">Total Items in Store: <strong>{ totalItems }</strong></div>
          <div className="fam-m--s">Errors: <strong>{ incidentsErrors }</strong></div>
        </div>

        <div className="fam-level fam-level--auto-grow">
          <button onClick={()=> updateTotal()} className="fam-btn fam-btn--secondary fam-m-t--l">Update Total</button>
          <button onClick={()=> getIncidents()} className="fam-btn fam-btn--secondary fam-m-t--l">Get Items from API</button>
        </div>

      </div>
      
      <div className="fam-box fam-m-t--m fam-m-b--m">
        <h3>Data From Store</h3>
        <ul>{ items }</ul>
      </div>
    </>
  )
}

export default IncidentsDisplay;