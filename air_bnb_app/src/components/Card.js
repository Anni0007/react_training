// import starIcon from "../images/download.png"
function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card-image"></img>
            <div className="rating-div">
                <img src="../images/download.png" className="star-icon"></img>
                <p className="card-rating"> {props.rating} . {props.country}</p>
            </div>
            <h4 className="card-title">{props.title}</h4>
            <p className="pricing"><strong>From $ {props.pricing}</strong> / person</p>
        </div>
    )
}

export default Card;