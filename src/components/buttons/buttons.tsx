import './buttons.css';
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
      <a
        className="button-purpule-large__link"
        href={link}
        onClick={(e) => onClick && e.preventDefault()}
      >
        {name}
      </a>
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
      <a className="button-white__link" href={link} onClick={handleClick}>
        {name}
      </a>
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
