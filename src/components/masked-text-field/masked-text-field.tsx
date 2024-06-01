import './masked-text-field.css';
import { useEffect, useRef } from 'react';

type MaskedTextFieldsProps = {
  title?: string;
  placeholder: string;
  addClass?: string;
};

const MaskedTextField = ({ title, placeholder }: MaskedTextFieldsProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const dateInputMask = (e: Event) => {
      const elm = e.target as HTMLInputElement;

      if (!(e instanceof InputEvent) || !e.data || !elm) {
        return;
      }

      const inputChar = e.data;

      if (!/^\d$/.test(inputChar)) {
        elm.value = elm.value.replace(/[^0-9]/g, '');
      }

      let value = elm.value.replace(/\D/g, '');

      if (value.length > 2) {
        value = `${value.slice(0, 2)}.${value.slice(2)}`;
      }
      if (value.length > 5) {
        value = `${value.slice(0, 5)}.${value.slice(5)}`;
      }

      elm.value = value;
    };

    if (inputRef.current) {
      inputRef.current.addEventListener('input', dateInputMask);
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('input', dateInputMask);
      }
    };
  }, []);


  return (
    <div className="masked-text-field-block">
      <div className="masked-text-field-block__header">
        <h3 className="masked-text-field-block__title">{title}</h3>
      </div>
      <input
        className="masked-text-field-block__masked-text-field"
        ref={inputRef}
        type="text"
        name="field-name"
        placeholder={placeholder}
        maxLength={10}
      />
    </div>
  );
};

export default MaskedTextField;
