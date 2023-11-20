import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import K from './components/Message'
//경로가 있는 곳에서 가져올 export 이름을 K 라고 지정하면

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
<K />
</React.StrictMode>,
  );
  //여기서도 K라고 쓸 수 있다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
