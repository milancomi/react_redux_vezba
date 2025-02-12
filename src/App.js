import React from 'react';
import './App.css';
import store from './redux/store'
import {Provider} from 'react-redux'
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';

function App() {
  return (
    <Provider store ={store}>
    <div className="App">
      {/* <HooksCakeContainer/>
       */}
       <IceCreamContainer/>
      <CakeContainer />
    </div>
    </Provider>
  );
}

export default App;
