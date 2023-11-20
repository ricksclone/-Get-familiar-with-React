import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Message from './components/Message'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( // root.render 안에는 하나의 값만 넣을 수 있다.
  /*
  <React.StrictMode>
    <App />
  </React.StrictMode>
*/
<React.StrictMode>
<Message />
</React.StrictMode>,
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
