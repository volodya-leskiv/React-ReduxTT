import React, { useState } from 'react';
import { useAppSelector } from '../hooks';
import './PLN.scss';

export const PLN: React.FC = () => {
  const pln = useAppSelector(state => state.currency.pln);
  const [value, setValue] = useState('');

  return (
    <div className="container pln-tab">
      <div className="pln-tab__container">
        <h1>Result:</h1>
        <h2 className="pln-tab__info">
          {`${value} UAH to PLN = ${(pln * +value).toFixed(2)}`}
        </h2>
      </div>
      <input
        type="number"
        className="pln-tab__input input is-primary"
        placeholder="Please,enter the sum"
        min={1}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};
