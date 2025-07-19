import {
  ButtonPurpleLarge,
  ButtonWhite,
} from '../../buttons/buttons';
import TextField from '../../text-field/text-field';
import './login-card.css';

type LoginCardProps = {
  onToggleForm: () => void;
};

const LoginCard = ({ onToggleForm }: LoginCardProps) => (
  <div className="login-card">
    <h1 className="login-card__login-text">Войти</h1>
    <TextField name="email" type="text" placeholder="Email" />
    <TextField name="password" type="text" placeholder="Пароль" />
    <ButtonPurpleLarge name="Войти" link="/" />
    <div className="login-card__footer">
      <p className="login-card__no-account-text">Нет аккаунта на Toxin?</p>
      <ButtonWhite onClick={onToggleForm} name="Создать" />
    </div>
  </div>
);

export default LoginCard;
