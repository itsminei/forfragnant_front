import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate로 변경
import "./RtspInfo.css";

const RtspInfo = ({ stationName }) => {
  const navigate = useNavigate();

  const lineInfo = {
    "1호선": { direction: "용산 / 인천", next: "5분 남음", afterNext: "10분 남음" },
    "4호선": { direction: "동대문 / 미아사거리", next: "3분 남음", afterNext: "7분 남음" },
    "경의중앙선": { direction: "용산 / 의정부", next: "6분 남음", afterNext: "12분 남음" },
    "공항철도": { direction: "인천공항 / 김포공항", next: "2분 남음", afterNext: "5분 남음" },
  };

  const handleLineClick = (lineName) => {
    navigate("/train");
  };

  return (
    <div className="rtsp-info">
      <h2>검색한 역: {stationName}</h2>
      <div className="arrival-info">
        {Object.entries(lineInfo).map(([lineName, info]) => (
          <div
            key={lineName}
            className="train-info"
            onClick={() => handleLineClick(lineName)}
          >
            <h5>{lineName} ({info.direction})</h5>
            <p style={{ fontSize: '10px', color: 'red' }}>{info.next}</p>
            <p style={{ fontSize: '10px' }}>{info.afterNext}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RtspInfo;
