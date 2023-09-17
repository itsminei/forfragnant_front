import React, { useState } from "react";
import RtspInfo from "./RtspInfo";

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showRtspInfo, setShowRtspInfo] = useState(false);
  const [stationName, setStationName] = useState(""); // 검색한 역 이름을 상태로 관리

  const handleSearch = () => {
    // 검색 로직을 이곳에 추가
    // 예: 검색 결과를 가져와서 필요한 상태를 설정

    // 검색을 완료하면 도착 정보 화면을 보여주며 검색한 역 이름을 설정합니다.
    setStationName(searchValue);
    setShowRtspInfo(true);
  };

  return (
    <div>
      {!showRtspInfo ? (
        <div>
          <input
            type="text"
            placeholder="역 이름을 입력하세요"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button onClick={handleSearch}>검색</button>
        </div>
      ) : (
        <RtspInfo stationName={stationName} /> 
      )}
    </div>
  );
};

export default SearchScreen;
