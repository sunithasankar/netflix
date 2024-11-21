import logo from "../assets/images/logo.png";
import cromocast from "../assets/images/cromo.png";
import search from "../assets/images/search.png";
import cart from "../assets/images/cart.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="row d-flex">
      <div className="col-md-2">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="col-md-8">
        <div className="navbar-container">
          <ul>
            <NavLink to="/tvshows" className={({isactive})=>(isactive?"navbar-active":"navbar-inactive")}>Tv Shows</NavLink>
            <NavLink to="/movies" className={({isactive})=>(isactive?"navbar-active":"navbar-inactive")}>Movies</NavLink>
            <NavLink to="/recentlyadded"className={({isactive})=>(isactive?"navbar-active":"navbar-inactive")}>Recently Added</NavLink>
            <NavLink to= "/mylist"className={({isactive})=>(isactive?"navbar-active":"navbar-inactive")}>My List</NavLink>
          </ul>
        </div>
      </div>
      <div className="col-md-2">
        <div className="broadcast-icons">
          <img src={cromocast} alt="img" />
          <img src={search} alt="img" />
          <img src={cart} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
