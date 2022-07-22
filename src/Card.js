import "./Card.css"

function Card(props)
{
   
    return(
            <div className="Draft">
                {props.openspots===0&&<div className="card-badge">SOLD OUT</div>}
                <img src={props.img} alt="Zawodnik"></img><br/>
                <div className="Draft-stats">
                    <img src="IMG/image12.jpg" alt="Gwiazda"></img>
                    <span>{props.rating}</span>
                    <span className="Grey"> ({props.rates}) * </span>
                    <span className="Grey">{props.country}</span>
                </div>
                <p>{props.description}</p>
                <p><strong>From ${props.price}</strong>/ person
                </p>
            </div>
        )
}

export {Card}