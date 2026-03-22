import { useState, useId } from 'react';
import './App.css';

export default function App() {
  const [name, setName] = useState('');

  return (
    <section>
      <Input
        value={name}
        placeholder="Search"
        onChange={setName}
        className="input-container"
        label="Search"
      />
      <p>Input : {name}</p>
    </section>
  );
}

const Input = function Input(props) {
  const {
    label,
    value,
    placeholder = '',
    onChange,
    disabled = false,
    className = '',
    type = 'text',
  } = props;
  const id = useId();

  return (
    <div className={className}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};
