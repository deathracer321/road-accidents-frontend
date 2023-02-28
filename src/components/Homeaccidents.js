import React, { useState, useEffect } from "react";
import "../css/HomeAccidents.css";
import { doc, getDocFromCache } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

function Homeaccidents() {
  const docRef = doc(db, "cities", "SF");
  const [usersImpacted, setUsersImpacted] = useState([]);

  var listItems;

  const dataRetriever = async (userId) => {
    const querySnapshot = await getDocs(collection(db, "users"));
    var tempAllFetchedData = [];
    querySnapshot.forEach((doc) => {
      tempAllFetchedData.push(doc.data());
    });
    console.log(tempAllFetchedData);
    setUsersImpacted(tempAllFetchedData);
  };

  useEffect(() => {
    dataRetriever();
    console.log(usersImpacted);
  }, []);

  return (
    <div>
      <h1 className="homeaccidents-header">List of recent road accidents:</h1>
      <div id="homeaccidents-table">
        <table id="customers">
          <tr>
            <th>Name</th>
            <th>Emergency Contact</th>
            <th>Address</th>
            <th>Pressure</th>
            <th>Location of incident</th>
            <th>Ground Clearance</th>
          </tr>

          {usersImpacted.map((item) => {
            return (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.emergencyContact}</td>
                <td>{item.address}</td>
                <td>{item.pressure}</td>
                <td>{`${item.gpsLocationLat},${item.gpsLocationLon}`}</td>
                <td>{item.groundClearance} </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Homeaccidents;
