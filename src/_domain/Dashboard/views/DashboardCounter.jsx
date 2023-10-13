
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/_domain/Dashboard/store/dashboard.slice";


const Dashboard = () => {
  
  const dispatch = useDispatch();
  const bigCount = useSelector((_state) => _state.dashboard.count);

  const up = (_val) => {
    dispatch(increment(_val));
  }
  const down = (_val) => {
    dispatch(decrement(_val));
  }

  const TEMPLATE = (
    <>
      <h1>Dashboard Counter</h1>
      
      <span className="fam-text-size--7">{ bigCount }</span>
      <div className="fam-level fam-level--auto-grow">
        <button onClick={ ()=> up(5) } className="fam-btn fam-btn--secondary">+</button>
        <button onClick={ ()=> down(5) } className="fam-btn fam-btn--secondary">-</button>
      </div> 
    </>
  );

  return TEMPLATE;
};

export default Dashboard;