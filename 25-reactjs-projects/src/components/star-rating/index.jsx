import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
    }
    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);
    }
    function handleMouseLeave() {
        setHover(rating);
    }

    return (
        <div className="wrapper">
        <div className="star-rating flex ">
            {[...Array(noOfStars)].map((_, index) => {
                index += 1;
                return (
                    <FaStar
                        key={index}
                        className={index <= (hover || rating) ? "text-yellow-300" : "text-gray-700"}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    />
                );
            })}
        </div>
        </div>
    );
}

export default StarRating