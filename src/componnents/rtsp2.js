import React, { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../fbase';
import './Realtime.css';

function Realtime() {
  const [piData, setPiData] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "seat", "a1");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPiData(docSnap.data().seated);
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
              className={`box ${rowIndex === 5 ? (piData === 0 ? "pink" : (piData === 1 ? "hotpink" : "gray")) : (rowIndex === 0 ? "pink" : "gray")}`}
            >
              {rowIndex === 5 ? (piData === 0 ? "비었음" : (piData === 1 ? "앉았음" : "")) : (rowIndex === 0 ? "비었음" : "")}
            </div>
          ))}
        </div>
      </div>
    </div>
  );



}

export default Realtime;
