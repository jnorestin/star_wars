import React,{useContext} from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";


export const Navbar = () => {
  const {store, actions } = useContext(Context)
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h7">
          <img className="navbar-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="Star Wars Logo" />
        </span>
      </Link>
      <div className="ml-auto">
      <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Favorites
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
   {store.favorites.map((favorite,index)=>{
    return (
      <a key={index} className="dropdown-item" href="#">{favorite}<span onClick={()=> actions.deleteFavorite(index)}>X</span></a>
    )
   })}
    <a className="dropdown-item" href="#">Favorites</a>
  </div>
</div>
      </div>
    </nav>
  );
};