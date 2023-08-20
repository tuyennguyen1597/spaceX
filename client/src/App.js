import { Fragment, useEffect } from 'react';
import './App.css';
import Filter from './component/filter';
import { Provider } from 'react-redux';
import store from './store';
import { getShipTypes, getShips } from './actions/ship';

function App() {
  useEffect(() => {
    store.dispatch(getShipTypes())
    store.dispatch(getShips())
  }, [])
  console.log()
  return (
    <Provider store={store}>
      <Fragment>
        <Filter/>
      </Fragment>
    </Provider>

  );
}


export default App;
