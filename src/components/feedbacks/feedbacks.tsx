import { FeedbackType } from '../../types/types';
import Feedback from '../feedback/feedback';

type FeedbacksProps = {
  feedBacks: FeedbackType[];
};
const Feedbacks = ({ feedBacks }: FeedbacksProps) => (
  <div className="room-details__room-feedbacks revealator-fade revealator-once">
    <div className="room-details__feedback-header">
      <h1 className="room-details__feedback-title">
          Отзывы посетителей номера
      </h1>
      <p className="room-details__feedbacks-count">{`${feedBacks.length} отзыва`}</p>
    </div>
    {feedBacks.map((feedbackItem: FeedbackType) => (
      <Feedback feedBack={feedbackItem} key={feedbackItem.name} />
    ))}
  </div>
);
export default Feedbacks;
