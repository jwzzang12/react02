import "./App.css";
import "./css/layout.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Days from "./components/Days";
import Day from "./components/Day";
import InsertDay from "./components/InsertDay";
import InsertVoca from "./components/InsertVoca";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseRefComponent from "./components/UseRefComponent";

//그리고 app 전체를 BrowserRouter로 감싸고 링크를 걸어서 바뀌는 곳은 routes 안에 route 만들어서 사용
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <UseRefComponent></UseRefComponent> */}
        <Header />
        <Routes>
          <Route path="/" element={<Days />} />
          <Route path="/insert/day" element={<InsertDay />} />
          <Route path="/insert/voca" element={<InsertVoca />} />
          <Route path="/day/:day" element={<Day />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
