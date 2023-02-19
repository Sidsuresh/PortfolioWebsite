import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Components/Home/HomePage";

const App = () => {
  return (
    <div className="App">
      <Header />

      <section className="main">
        <HomePage />
      </section>
    </div>
  );
};

export default App;
