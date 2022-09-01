import axios from "axios";
import { useState } from "react";

export default function Voca(props) {
  const [info, setInfo] = useState(props);
  const [isDone, setIsDone] = useState(props.isDone);
  const [isVisible, setIsVisible] = useState(true);
  const server = "https://jwzzang-voca-app.herokuapp.com";
  const toggleKor = () => {
    console.log(isVisible);
    setIsVisible(!isVisible);
  };
  const toggleDone = () => {
    setIsDone(!isDone);
    axios
      .put(`${server}/voca/${props.id}`, {
        isDone: !isDone,
        //여깄는 isDone은 위에 useState로 지정된 변수
        //put이랑 delte는 post로 받을 수 있음
      })
      .then((res) => {
        if (res.data.done === "OK") {
          setIsDone(!isDone);
        }
      });
  };
  const deleteVoca = () => {
    if (window.confirm("다외웠나요?")) {
      console.log("delete");
      axios.delete(`${server}/voca/${props.id}`).then((res) => {
        if (res.data.delete === "OK") {
          setInfo({ id: -1 });
          //db에서 값을 지웟다는 결과 받았기 때문에 -1 값 집언허고 return false 통해 화면에 렌더링 안되게 만들기
        }
      });
    }
  };
  if (info.id === -1) {
    return false;
  }
  return (
    <li className={isDone ? "done" : ""} data-idx={props.id} key={props.id} onDoubleClick={toggleDone}>
      <div className="eng word">{props.eng}</div>
      <div className="kor word">{isVisible && props.kor}</div>
      <div className="btns">
        <button className="btn hidden">
          <span className="material-icons" onClick={toggleKor}>
            visibility_off
          </span>
        </button>
        <button className="btn del" onClick={deleteVoca}>
          <span className="material-icons">delete</span>
        </button>
      </div>
    </li>
  );
}
