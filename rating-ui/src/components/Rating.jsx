import { useState } from 'react';
import Star from './Star';
import Modal from './Modal';
import Button from './Button';

const Rating = ({ heading = 'Rate Your Experience!', color = 'gold' }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHovering] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const feedBack = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'];

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
    setHovering(0);
  };

  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star) => (
          <Star
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            color={color}
            ratingClick={setRating}
            hoverEnter={setHovering}
            hoverLeave={setHovering}
          />
        ))}
      </div>
      {rating > 0 && <p className="feedBack">{feedBack[rating - 1]}</p>}

     

      <Button
        className="submit-btn"
        disabled={rating === 0}
        onClick={handleSubmit}
      >
        submit
      </Button>

      <Modal isOpen={submitted} onClose={closeModal} rating={rating} />
    </div>
  );
};

export default Rating;
