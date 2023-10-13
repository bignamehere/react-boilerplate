
import { NavLink } from "react-router-dom";

const GlobalNav = () => {
  return (
    <div className="fam-level fam-level--auto fam-m-t--m">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/incidents">Incidents</NavLink>
      <NavLink to="/test">Test</NavLink>
    </div>
  )
}

export default GlobalNav;