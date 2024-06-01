import TextField from '../text-field/text-field';
import './subscription-text-field.css';

const SubscriptionTextField = () => (
  <div className="subscription-text-field-block">
    <form action="" method="get">
      <div className="subscription-text-field-block__subscription-text-field">
        <TextField placeholder='Email' type='email' name='email'/>
        <button className="sub-button" type="submit" value="">
            arrow_forward
        </button>
      </div>
    </form>
  </div>
);

export default SubscriptionTextField;
