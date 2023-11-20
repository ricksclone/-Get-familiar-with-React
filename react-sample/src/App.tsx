import React from 'react';
import logo from './logo.svg';
import './App.css';


//함수로 App 이라는 컴포넌트를 정의 
function App() {
  //APP 컴포넌트는 return 이라는 요소를 반환한다.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
