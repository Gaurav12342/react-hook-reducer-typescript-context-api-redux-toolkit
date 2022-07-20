import React, { FC, useEffect } from 'react'
import Router from './router/index';
const App: FC = () => {
  // useEffect(() => {
  //   localStorage.setItem("userToken", "gaurav sanjay pendharkar");
  // }, []);
  return (
    <div>
      <Router />
    </div>
  )
}

export default App;