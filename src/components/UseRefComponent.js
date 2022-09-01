import { useRef, useState } from "react";

export default function UseRefComponent() {
  const [count, setCount] = useState(0);
  const refCount = useRef(0);
  let varCount = 0;
  const incCount = () => {
    // let count = 0;
    setCount(count + 1);
  };
  const incVarCount = () => {
    varCount++;
    console.log("varCount===", varCount);
  };
  const incRefCount = () => {
    refCount.current++;
    console.log("refCount===", refCount.current);
  };
  return (
    <>
      <div>
        <p style={{ color: "#fff", fontSize: "36px" }}>{count}</p>
        <button onClick={incCount} style={{ padding: "20px" }}>
          useState로 만드는 counter
        </button>
      </div>
      <div>
        <p style={{ color: "#fff", fontSize: "36px" }}>{varCount}</p>
        <button onClick={incVarCount} style={{ padding: "20px" }}>
          일반변수로 만드는 Counter
        </button>
      </div>
      <div>
        <p style={{ color: "#fff", fontSize: "36px" }}>{refCount.current}</p>
        <button onClick={incRefCount} style={{ padding: "20px" }}>
          useRef로 만드는 Counter
        </button>
      </div>
    </>
  );
}
