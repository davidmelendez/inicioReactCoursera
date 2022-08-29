
import Main from './components/MainComponent';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();


class App extends Component {


  render() {
    return (
      <React.Fragment>
        {console.log('Se encapsula el proveedor store, carga la configuracion realizada en el configureStore, El Store se epaqueta iniciando aqui y queda disponible para el Main donde lo conectamos: App.js')}
         <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    </ React.Fragment>
    );

  }
}

export default App;
