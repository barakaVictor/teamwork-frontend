import React from 'react';
import { Router } from './router';
import { Provider } from 'react-redux'
import store from './redux/store'

class App extends React.Component {
  render(){
    return (
        <Provider store={store}>
          <div className="App">
            <Router/>
          </div>
        </Provider>
    );
  }
}
export default App;
