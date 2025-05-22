import Image from 'next/image';
import { FeedbackType } from '../../types/types';
import './feedback.css';
type FeedbackProps = {
  feedBack: FeedbackType;
};
const Feedback = ({ feedBack }: FeedbackProps) => {
  const { image, name, date, likes, text } = feedBack;

  return (
    <div className="feedback">
      <div className="feedback__header">
        <Image className="feedback__profile-image" src={image} alt="" />
        <div className="feedback__header-text">
          <h4 className="feedback__profile-name">{name}</h4>
          <p className="feedback__comment-date">{date}</p>
        </div>
      </div>
      <div className="feedback__footer">
        <div className="like-button">
          <button className="b like__btn1 animated feedback_btn">
            <i className="material-icons like-button__not-liked">
              favorite_border
            </i>
            <i className="material-icons like-button__liked">favorite</i>
            <span className="like__number">{likes}</span>
          </button>
        </div>
        <p className="feedback__text">{text}</p>
      </div>
    </div>
  );
};
export default Feedback;
