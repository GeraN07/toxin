import './buttons.css';
import { Link } from 'react-router-dom';
import { memo } from 'react';

type ButtonsProps = {
  name: string;
  addClass?: string;
  link?: string;
  onClick?: () => void;
};
type SmallButtonsProps = {
  name: string;
};

const ButtonPurple = ({ name, addClass = '', link }: ButtonsProps) => (
  <span className={`button-purpule${ addClass}`}>
    <a className="button-purpule__link" href={link}>
      {name}
    </a>
  </span>
);
const ButtonPurpleLarge = memo(
  ({ name, addClass = '', link, onClick }: ButtonsProps) => (
    <span className={`button-purpule-large ${addClass}`} onClick={onClick}>
      <Link 
        className="button-purpule-large__link"
        to={link}
        onClick={(e) => onClick && e.preventDefault()}
      >
        {name}
      </Link >
    </span>
  )
);

const AsideOpenButton = memo(
  ({ name, addClass = '', link, onClick }: ButtonsProps) => (
    <span className={`button-purpule-aside ${addClass}`} onClick={onClick}>
      <a
        className="button-purpule-aside__link"
        href={link}
        onClick={(e) => onClick && e.preventDefault()}
      >
        {name}
      </a>
    </span>
  )
);

const ButtonWhite = ({ name, addClass = '', link, onClick }: ButtonsProps) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <span className={`button-white ${addClass}`}>
      <Link  className="button-white__link" to={link} onClick={handleClick}>
        {name}
      </Link>
    </span>
  );
};
const ButtonSubmit = ({ name }: SmallButtonsProps) => <button className="button-submit">{name}</button>;
const ButtonClear = ({ name }: SmallButtonsProps) => <button className="button-clear">{name}</button>;

export {
  ButtonPurple,
  ButtonPurpleLarge,
  ButtonWhite,
  ButtonSubmit,
  ButtonClear,
  AsideOpenButton,
};
