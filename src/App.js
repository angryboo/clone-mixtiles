import React from 'react';
import { Route } from 'react-router-dom';
import classNames from 'classnames/bind';
import MainContainer from './Containers/MainContainer';
import style from './App.css';

const st = classNames.bind(style);

function App() {
  return (
    <main className={st('App')}>
      <Route exact path="/" component={MainContainer} />
    </main>
  );
}

export default App;
