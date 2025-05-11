import './star-rating.css';

type StarRatingProps = {
  rating: string;
};

const StarRating = ({ rating }: StarRatingProps) => (
  <div className="reviews__rating rating">
    <div className="reviews__stars rating__stars">
      <span style={{ width: rating }} />

    </div>
  </div>
);

export default StarRating;
