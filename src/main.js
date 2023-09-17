import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import './App.css';
import IMG from './img/2.png';
console.log(firebase);
const main = () => {
  return (
    <div className='main'>
      <h1>핑크 서브웨이</h1>
      <img src={IMG} alt='핑크 서브웨이 로고'></img>
      <Link to='/login'>
        <button>로그인 하기</button>
      </Link>
      <br />
      <Link to='/signup'>
        <button>회원가입 하기</button>
        </Link>
    </div>
  );
}

export default main;
