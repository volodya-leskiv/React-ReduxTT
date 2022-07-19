import React, { useEffect } from 'react';
import './App.scss';
// import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, NavLink } from 'react-router-dom';
// import { getLoadDataSelector } from './store/selectors';
// import { setLoadData } from './store/actions';
// import { getTodos } from './api/api';
import { USD } from './components/USD';
import { EUR } from './components/EUR';
import { PLN } from './components/PLN';
import { useAppDispatch, useAppSelector } from './hooks';
// eslint-disable-next-line import/named
import { fetchEur, fetchPln, fetchUsd } from './store/CurrencySlice';
// eslint-disable-next-line import/extensions,import/no-unresolved

// export const App: React.FC = () => {
//   const dispatch = useDispatch();
//   const loadData = useSelector(getLoadDataSelector);
//
//   const loadInfo = async () => {
//     const todosFromServer = await getTodos();
//
//     dispatch(setLoadData(todosFromServer));
//     // eslint-disable-next-line no-console
//     console.log(todosFromServer);
//   };
//
//   useEffect(() => {
//     loadInfo();
//   }, []);
//
//   // eslint-disable-next-line no-console
//   console.log(loadData);
//
//   return (
//     <div className="App">
//       <p>{loadData.symbols}</p>
//     </div>
//   );
// };

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.currency.isLoading);

  useEffect(() => {
    dispatch(fetchUsd());
    dispatch(fetchEur());
    dispatch(fetchPln());
  }, []);

  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <header>
          <div className="tabs is-flex is-flex-direction-column is-justify-content-center">
            <h1 className="title has-text-centered">Currency converter</h1>
            <NavLink to="/USD">UAH to USD</NavLink>
            <NavLink to="/EUR">UAH to EUR</NavLink>
            <NavLink className="App__tab" to="/PLN">UAH to PLN</NavLink>
          </div>
        </header>
      )}
      <Routes>
        <Route path="/USD" element={<USD />} />
        <Route path="/EUR" element={<EUR />} />
        <Route path="/PLN" element={<PLN />} />
      </Routes>
    </div>
  );
};
