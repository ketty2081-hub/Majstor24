import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/Rating.css"

function Rating({ rating = 0 }) {
    return (
        <div className="rating">

            {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon
                    key={star}
                    icon={faStar}
                    className={
                        star <= Math.round(rating)
                            ? "star active"
                            : "star"
                    }
                />
            ))}

            <span className="rating-text">
                {Number(rating).toFixed(1)} / 5
            </span>

        </div>
    );
}

export default Rating;
