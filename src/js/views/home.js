import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Peoplecard from "../component/peoplecard";
import Planetcard from "../component/planetcard";


export const Home = () => {
	const {store, actions } = useContext(Context)
    console.log(store.people)
	console.log(store.planets)
	console.log(store.vehicles)
	

	return (
		<div className="Home-container">
			<h2> People </h2>
			<div className="card-container"> 
				{store.people.map((person,index) => {
					return (
						<div className="card" key={index}>
							<Peoplecard item={person} id={index} />	
						</div>
					)
				})}	
			</div>
			<h2> Planets </h2>
			<div className="card-container"> 
				{store.planets.map((planet,index) => {
					return (
						<div className="card" key={index}>
							<Planetcard item={planet} id={index} />	
						</div>
					)
				})}	
			</div>
		</div>
	)
}
	