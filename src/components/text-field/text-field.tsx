import './text-field.css';
type TextFieldsProps = {
  title?: string;
  name: string;
  type: string;
  placeholder: string;
};

const TextField = ({ title, placeholder, name, type }: TextFieldsProps) => (
  <div className="text-field-block">
    <div className="text-field-block__header">
      <h3 className="text-field-block__title">{title}</h3>
    </div>
    <input
      className="text-field-block__text-field"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  </div>
);

export default TextField;

