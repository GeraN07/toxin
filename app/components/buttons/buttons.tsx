import './buttons.css';
import Link from 'next/link';
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

const ButtonPurpleLarge = memo(
  ({ name, addClass = '', link, onClick }: ButtonsProps) => (
    <span
      className={`button-purpule-large ${addClass}`}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {link ? (
        <Link className="button-purpule-large__link" href={link}>
          {name}
        </Link>
      ) : (
        <a className="button-purpule-large__link">{name}</a>
      )}
    </span>
  )
);

ButtonPurpleLarge.displayName = 'ButtonPurpleLarge';

const AsideOpenButton = memo(
  ({ name, addClass = '', link, onClick }: ButtonsProps) => (
    <span className={`button-purpule-aside ${addClass}`} onClick={onClick}>
      <a
        className="button-purpule-aside__link"
        href={link}
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick();
          }
        }}
      >
        {name}
      </a>
    </span>
  )
);

AsideOpenButton.displayName = 'AsideOpenButton';

const ButtonWhite = ({ name, addClass = '', link, onClick }: ButtonsProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <span className={`button-white ${addClass}`}>
      {link ? (
        <Link className="button-white__link" href={link} onClick={handleClick}>
          {name}
        </Link>
      ) : (
        <a className="button-white__link" href="#" onClick={handleClick}>
          {name}
        </a>
      )}
    </span>
  );
};

const ButtonSubmit = ({ name }: SmallButtonsProps) => (
  <button className="button-submit">{name}</button>
);

const ButtonClear = ({ name }: SmallButtonsProps) => (
  <button className="button-clear">{name}</button>
);

export {
  ButtonPurpleLarge,
  ButtonWhite,
  ButtonSubmit,
  ButtonClear,
  AsideOpenButton,
};
