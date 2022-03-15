import './App.css';
import React from 'react';
import { Provider} from 'react-redux';
import { store } from './redux/store';
import Calc from './components'

function App() {
  return (
    <Provider store={store}>
      <Calc />
    </Provider>
  )
}

export default App
