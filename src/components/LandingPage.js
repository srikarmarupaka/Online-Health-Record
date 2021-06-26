import React from 'react'
// import { Button } from 'react-bootstrap'
// import Carousel from './Carousel'
import '../styles/styles.module.scss';
// import ReactDOM from 'react-dom';
// import App from '../App';
import TopBar from './LandingPage/topbar';
import Headers from './LandingPage/headers';
import Login from './Login';

export default function LandingPage() {
  
  return <>
    <Login />
      {/* <TopBar />
      <Headers /> */}
    </>
  // ReactDOM.render(
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>,
  //   document.getElementById('root')
  // );
}
