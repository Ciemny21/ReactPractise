import "./Card.css"

function Card(props)
{
   
    return(
            <div className="Element">
                <img className="Element-pics" alt="mini" src={props.element.imageUrl}></img>
                <div className="Element-info">
                    <div className="Element-localization">
                        <img className="Element-localization-img" src="./IMG/pin_icon.jpg" alt="pin_icon"></img>
                        <p className="Element-localization-header">{props.element.location}</p>
                        <a className="Element-localization-ulr" href={props.element.googleMapsUrl} target="_blank" rel="noopener noreferrer">Viev on Google Maps</a>   
                    </div>
                    <h1>{props.element.title}</h1>
                    <p className="Element-date">{props.element.startDate} - {props.element.endDate}</p>
                    <p className="Element-content">{props.element.description}</p>
                </div>
            </div>
        )
}

export {Card}