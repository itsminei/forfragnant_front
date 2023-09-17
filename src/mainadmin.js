import React from 'react';
import { Link } from 'react-router-dom';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import './App.css';
import IMG from './img/2.png';

const main = () => {
  return (
    <div className='main'>
      <h1>핑크 서브웨이</h1>
      <img src={IMG} alt='핑크 서브웨이 로고'></img>
      <Link to='/searchscreen'>
        <button>실시간 지하철 정보</button>
      </Link>
      <br />
        <button>양보 요청하기</button>
    </div>
  );
}

export default main;
