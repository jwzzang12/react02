import { useState } from "react";

//redux state 변화를 지켜보고 있다가 상태가 변하면 rendering
export default function Counter() {
  // let num = 0;
  //react에서는 상태의 변화가 일어나야지만 화면은 다시 그린다.
  //hook을 사용해야됨
  // const [num, setNum] = useState(100);
  const [num, setNum] = useState(100);
  //num의 초기값 100으로 설정

  const animal = ["tiger", "lion"];
  const [a, b] = animal;
  const aa = animal[0];
  const bb = animal[1];
  function increase() {
    setNum(num + 1);
  }
  function decrease() {
    setNum(num - 1);
  }
  return (
    <>
      <h1>{num}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  );
}
