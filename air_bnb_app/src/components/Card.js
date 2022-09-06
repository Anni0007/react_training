import cardImage from "../images/pexels-photos.jpeg"
import starIcon from "../images/download.png"
function Card() {
    return (
        <div className="card">
            <img src={cardImage} className="card-image"></img>
            <div className="rating-div">
                <img src={starIcon} className="star-icon"></img>
                <p className="card-rating"> 5.0 .USA</p>
            </div>
            <h4 className="card-title">Nature Is very Beautiful</h4>
            <p className="pricing"><strong>From $ 140</strong> / person</p>
        </div>
    )
}

export default Card;