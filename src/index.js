import { Provider } from "react-redux";
import  ReactDOM  from 'react-dom';
import { cofigureStore } from "./store";
import './index.css';
import  App  from './App';

const store = cofigureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
