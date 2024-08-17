import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Addcontact from './components/addcontact/AddContact'
import ShowContacts from './components/showcontacts/ShowContacts'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import  store  from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <div className='container'>
    <h1>ClientSide Contact Application</h1>
    <hr />
    <Addcontact  />
    <hr />
    <ShowContacts />
    </div>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
