import "./App.css";
import "./css/layout.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Days from "./components/Days";
import InsertDay from "./components/InsertDay";
import InsertVoca from "./components/InsertVoca";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//react에서는 a태그를 사용하지 않는다.
//routing을 위해 react-router-dom npm i 를 통해 설치해서 쓴다.
//그리고 app 전체를 BrowserRouter로 감싸고 링크를 걸어서 바뀌는 곳은 routes 안에 route 만들어서 사용
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Days />} />
          <Route path="/insert/day" element={<InsertDay />} />
          <Route path="/insert/voca" element={<InsertVoca />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
