import React, { useState } from 'react';
import { useAppSelector } from '../hooks';
import './EUR.scss';

export const EUR: React.FC = () => {
  const eur = useAppSelector(state => state.currency.eur);
  const [value, setValue] = useState('');

  return (
    <div className="container eur-tab">
      <div className="eur-tab__container">
        <h1>Result:</h1>
        <h2 className="eur-tab__info">
          {`${value} UAH to EUR = ${(eur * +value).toFixed(2)}`}
        </h2>
      </div>
      <input
        type="number"
        className="eur-tab__input input is-primary"
        placeholder="Please,enter the sum"
        min={1}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};
