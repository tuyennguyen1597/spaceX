import { Fragment, useEffect } from 'react';
import './App.css';
import { Filter } from './component/filter';
import { Provider } from 'react-redux';
import store from './store';
import { getShipTypes } from './actions/ship';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Filter/>
      </Fragment>
    </Provider>

  );
}

export default App;
