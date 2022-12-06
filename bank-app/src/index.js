import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Register } from './Components/Register';
import { Admin } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { Sidebar } from './Components/Sidebar';
import { Widget } from './Components/Widget';
import { UserDashboard } from './Components/Budget-App/UserDashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route index element={<App/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/admindashboard' element={<Admin/>}/>
          <Route path='/userdashboard' element={<UserDashboard/>}/>
          {/* <Route path='/navbar' element={<Navbar/>}/>  
          <Route path='/sidebar' element={<Sidebar/>}/>  
          <Route path='/widget' element={<Widget/>}/>   */}
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
