import "./Card.css"

function Card(props)
{
    return(
            <div className="Draft">
                <img src={props.img} alt="Zawodnik"></img><br/>
                <div className="Draft-stats">
                    <img src="IMG/image12.jpg" alt="Gwiazda"></img>
                    <span>{props.rate}</span>
                    <span className="Grey"> ({props.opinion}) * </span>
                    <span className="Grey">{props.country}</span>
                </div>
                <p>{props.motto}</p>
                <p><strong>From ${props.price}</strong>/ person
                </p>
            </div>
    )
}

export {Card}