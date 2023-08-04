import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const peoplecard = (props) => {
  const { store, actions } = useContext(Context);
  console.log(props.id);
  return (
    <div className="card1" style={{ width: "18rem" }}>
      <img
        className="card-img-top cardimage"
        src={`https://starwars-visualguide.com/assets/img/characters/${props.id+1}.jpg`}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.item.name}</h5>
        <p className="card-text"> Hair color: {props.item.hair_color}</p>
        <p className="card-text">Birth year: {props.item.birth_year}</p>
        <p className="card-text">Eye Color: {props.item.eye_color}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={`/about/${props.id}`}>
            <span href="#" className="btn btn-primary">
              learn more
            </span>
          </Link>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              onClick={() => actions.addFavorite(props.item.name)}
              href="#"
              className="fa fa-heart text-success"
              style={{ fontSize: '2.0rem', cursor: 'pointer' }}
            >
              
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default peoplecard;
