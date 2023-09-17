import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate로 변경
import "./RtspInfo.css";

const RtspInfo = ({ stationName }) => {
  const navigate = useNavigate(); // useNavigate를 사용하여 경로 이동을 위한 함수를 가져옵니다.

  // 각 호선의 도착 정보를 상태로 관리
  const [lineInfo, setLineInfo] = useState({
    "1호선": { next: "5분 남음", afterNext: "10분 남음" },
    "4호선": { next: "3분 남음", afterNext: "7분 남음" },
    "경의중앙선": { next: "6분 남음", afterNext: "12분 남음" },
    "공항철도": { next: "2분 남음", afterNext: "5분 남음" },
  });

  // 각 라인을 클릭하여 '/rtsp' 경로로 이동하는 함수
  const handleLineClick = (lineName) => {
    // 예: 1호선 클릭 시 '/rtsp' 경로로 이동
    navigate("/realtime");
  };

  return (
    <div className="rtsp-info">
      <h2>검색한 역: {stationName}</h2>
      {/* 실시간 도착 정보를 여기에 표시 */}
      <div className="arrival-info">
        {Object.entries(lineInfo).map(([lineName, info]) => (
          <div
            key={lineName}
            className="train-info"
            // 각 라인 클릭 시 '/rtsp' 경로로 이동하도록 설정
            onClick={() => handleLineClick(lineName)}
          >
            <h2>{lineName}</h2>
            <p>{info.next}</p>
            <p>{info.afterNext}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RtspInfo;
