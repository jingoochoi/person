import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Header } from './layout/Header';
import { Mainarea } from './layout/Mainarea';
import { Footer } from './layout/Footer';
import { ctxt } from './module/context';
function App() {
  const[mode,setMode]=useState('map')
  const chan=(a)=>{
    setMode(a)
  }
  return(
    <ctxt.Provider value={{mode,chan}}>
      <div className='lays'>
        <Mainarea></Mainarea>
        <Header></Header>
        <Footer></Footer>
      </div>
    </ctxt.Provider>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
