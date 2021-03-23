import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {getTodos} from './actions/todos';
import './App.css';
import Nav from './components/Nav';
import Todos from './components/Todos';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      <Nav />
      <Todos currentId={currentId} setCurrentId={setCurrentId}/>
    </>
  );
}

export default App;
