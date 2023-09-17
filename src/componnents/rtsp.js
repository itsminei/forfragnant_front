import React, { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../fbase';
import './Realtime.css';

function Realtime() {
  const [piData, setPiData] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "seat", "raspi");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPiData(docSnap.data().pi);
      } else {
        console.log("No such document!");
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>실시간 좌석 점유 현황</h1>
      <div className="subway">
        <div className="subway-column">
          {[...Array(6)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className={`box ${rowIndex === 2 && piData === 0 ? "red" : "gray"}`}
            >
              {rowIndex === 2 && piData === 0 ? "좌석이 비었습니다" : ""}
            </div>
          ))}
        </div>
        <div className="subway-column">
          {[...Array(6)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className={`box ${rowIndex === 2 && piData === 0 ? "red" : "gray"}`}
            >
              {rowIndex === 2 && piData === 0 ? "좌석이 비었습니다" : ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Realtime;
