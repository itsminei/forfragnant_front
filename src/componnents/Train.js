import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Train.css';

const Train = () => {
    const navigate = useNavigate(); // react-router-dom의 useNavigate 훅 사용
    const firstTrainInfo = [2, 2, 2, 0, 0, 3];
    const secondTrainInfo = [1, 3, 0, 0, 2, 4];
  
    const goToRtspPage = (index) => {
      if (index === 0) {
        navigate('/realtime');
      } else if (index === 1) {
        navigate('/realtime2');
      }
      // 여기에 더 많은 조건을 추가할 수 있습니다.
    };
  
    return (
      <div className="train-container">
        <h1>지하철 잔여석 정보</h1>
        <div className="train-info">
          <h3>5분 후 도착 예정</h3>
          <div className="train-cars">
            {firstTrainInfo.map((seat, index) => (
              <div 
                key={index} 
                className="train-car" 
                onClick={() => {
                  console.log(`Clicked on index ${index}`);
                  goToRtspPage(index);
                }}
              >
                잔여: {seat}
              </div>
            ))}
          </div>
        </div>
        <div className="train-info">
          <h3>10분 후 도착 예정</h3>
          <div className="train-cars">
            {secondTrainInfo.map((seat, index) => (
              <div key={index} className="train-car">
                잔여: {seat}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Train;
  