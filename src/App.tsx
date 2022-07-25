import React, { FC } from 'react'
import Router from './router/index';
import { Provider } from 'react-redux';
import { store } from './store';

const App: FC = () => {
  return (
    <div>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  )
}

export default App;