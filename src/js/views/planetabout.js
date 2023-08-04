import React from "react"
import { useParams } from "react-router"
import { Context } from "../store/appContext"
import { useContext } from "react"

const Planetabout = () => {
    const {store,actions} = useContext(Context)
    const params = useParams()
    let planet = parseInt(params.id)
    let item = store.planets[planet]
    console.log(item);
    return (
        <div>
            <div>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${planet+ 1}.jpg`}
                onError={(e) => {    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'                   }}> 
                </img>
                <p>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                </p>
            </div>
            <div>
                <p>Terrain: {item.terrain} </p>
                <p>Gravity: {item.gravity} </p>
                <p>Climate: {item.climate} </p>
               
            </div>

        </div>
    )
}

export default Planetabout