import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function InsertDay() {
  const server = "https://jwzzang-voca-app.herokuapp.com";
  const navigate = useNavigate();
  const [days, setDays] = useState([]);

  useEffect(() => {
    axios.get(`${server}/days`).then((res) => {
      setDays(res.data);
    });
  }, []);
  const insertDay = () => {
    axios.post(`${server}/days/add`, { day: days.length + 1 }).then((res) => {
      console.log(res);
      if (res.data.statusText === "OK") {
        alert("day가 추가됨");
        navigate("/");
      }
    });
  };
  return (
    <>
      <div className="container dayBox">
        <h2 className="title">Insert Day</h2>
        <p className="current">
          current day :
          <strong>
            <span className="day">{days.length}</span>
            <span className="unit">day</span>
          </strong>
        </p>
        <div className="btns">
          <button className="btn" onClick={insertDay}>
            Add Day
          </button>
        </div>
      </div>
    </>
  );
}
