import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Voca from "./Voca";

export default function Day() {
  const server = "https://jwzzang-voca-app.herokuapp.com";
  // const day = useParams();
  // return (
  //   <>
  //     <div className="container dayBox">
  //       <h2 className="tilte">Day-{day.day}</h2>
  //     </div>
  //   </>
  // );
  const { day } = useParams();
  //day에 object라는 의미의 {}를 쳐주면 day.day같은 식으로 받지 않아도 된다.
  //useParams라는 hook은 상단 네비게이션의 params 값을 받을때 쓰는 기능
  // let day = day < 10 ? "0" + day : day;
  const [voca, setVoca] = useState([]);
  useEffect(() => {
    axios.get(`${server}/voca/${day}`).then((res) => {
      setVoca(res.data);
      // console.log(res.data);
    });
  }, []);
  return (
    <>
      <div className="container dayBox">
        <h2 className="title">Day-{day}</h2>
        <ul className="vocas">
          {voca.map((item, idx) => {
            return <Voca kor={item.kor} eng={item.eng} key={item.id} isDone={item.isDone} id={item.id} day={item.day} />;
          })}
        </ul>
      </div>
      <div className="btnMain">
        <Link to={"/"}>Main</Link>
      </div>
    </>
  );
}
