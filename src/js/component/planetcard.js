import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from '../store/appContext';

const Card = (props) => {
  const { actions } = useContext(Context);
  
  console.log(props.id);
  
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top cardimage"
        src={`https://starwars-visualguide.com/assets/img/planets/${props.id + 1}.jpg`}
        onError={(e) => {
          e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
        }}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.item.name}</h5>
        <p className="card-text"> Climate:{props.item.climate}</p>
        <p className="card-text"> Gravity:{props.item.gravity}</p>
        <p className="card-text">Terrain:{props.item.terrain}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to={`/planetabout/${props.id}`}>
            <span href="#" className="btn btn-primary">Learn more</span>
          </Link>
          <span
            onClick={() => actions.addFavorite(props.item.name)}
            href="#"
            className="fa fa-heart text-success"
            style={{ fontSize: '2.5rem', cursor: 'pointer' }}
          >
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
