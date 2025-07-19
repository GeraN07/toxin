import {
  ButtonPurpleLarge,
  ButtonWhite,
} from '../../buttons/buttons';
import MaskedTextField from '../../masked-text-field/masked-text-field';
import Radio from '../../radio/radio';
import TextField from '../../text-field/text-field';
import Toggle from '../../toggle/toggle';
import './registration-card.css';

type RegistrationCardProps = {
  onToggleForm: () => void;
};
const RegistrationCard = ({ onToggleForm }: RegistrationCardProps) => (
  <div className="registration-card">
    <h1 className="registration-card-title">Регистрация аккаунта</h1>
    <TextField placeholder="Имя" name="Имя" type="text" />
    <TextField placeholder="Фамилия" name="Фамилия" type="text" />
    <Radio />
    <MaskedTextField title="дата рождения" placeholder="ДД.ММ.ГГГГ" />
    <TextField
      title="данные для входа в сервис"
      placeholder="Email"
      name="Email"
      type="text"
    />
    <TextField placeholder="Пароль" name="Пароль" type="text" />
    <Toggle />
    <ButtonPurpleLarge name="Зарегистрироваться" link="/" />
    <div className="registration-card__footer">
      <p className="registration-card__already-text">
          Уже есть аккаунт на Toxin?
      </p>
      <ButtonWhite name="войти" onClick={onToggleForm} />
    </div>
  </div>
);

export default RegistrationCard;
