import React from 'react';
import './login/login.css';
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
function Login () {
  return (
    <div>

      <div className="card">
        <div className="box">
        <img src={img1} alt="" />
        </div>
        <div className="box">
          <img src={img2} alt="" />
        </div>
        <div className="box">
        <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
