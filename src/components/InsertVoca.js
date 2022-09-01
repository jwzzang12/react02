import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InsertVoca() {
  const server = "https://jwzzang-voca-app.herokuapp.com";
  const [days, setDays] = useState([]);
  const navigate = useNavigate();
  //react에서 dom에 접근할때는 useRef라는 Hook을 사용함
  const eng = useRef();
  const kor = useRef();
  const day = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${server}/voca/add`, {
        day: parseInt(day.current.value),
        eng: eng.current.value,
        kor: kor.current.value,
        isDone: false,
      })
      .then((res) => {
        if (res.data.statusText === "OK") {
          alert("입력되었습니다.");
          navigate(`/day/${parseInt(day.current.value)}`);
        }
      });
  };
  useEffect(() => {
    axios.get(`${server}/days`).then((res) => {
      console.log(res.data);
      setDays(res.data);
    });
  }, []);

  return (
    <>
      <div className="container dayBox">
        <h2 className="title">INSERT VOCA</h2>
        <form className="vocaBox" onSubmit={onSubmit}>
          <div className="inputBox">
            <label>ENG</label>
            <input type="text" placeholder="word" ref={eng} />
          </div>
          <div className="inputBox">
            <label>KOR</label>
            <input type="text" placeholder="뜻" ref={kor} />
          </div>
          <div className="inputBox">
            <select type="text" ref={day}>
              {days.map((item, idx) => {
                return (
                  <option value={item.day} key={idx}>
                    {item.day}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="btns">
            <button className="btn">Send</button>
          </div>
        </form>
      </div>
    </>
  );
}
