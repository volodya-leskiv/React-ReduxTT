import React, { useState } from 'react';
import { useAppSelector } from '../hooks';
import './USD.scss';

export const USD: React.FC = () => {
  const usd = useAppSelector(state => state.currency.usd);
  const [value, setValue] = useState('');

  return (
    <div className="container usd-tab">
      <div className="usd-tab__container">
        <h1>Result:</h1>
        <h2 className="usd-tab__info">
          {`${value} UAH to USD = ${(usd * +value).toFixed(2)}`}
        </h2>
      </div>
      <input
        type="number"
        className="usd-tab__input input is-primary"
        placeholder="Please,enter the sum "
        min={1}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};
