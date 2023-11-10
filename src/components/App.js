import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";
import { useContext } from "react";
import { GameContext } from "./GameProvider";
import useInterval from "../hooks/use-interval.hook";

const App = (props) => {

const {numCookies, setNumCookies, cookiesPerSecond } = useContext(GameContext); 

useInterval(() => {
    setNumCookies(numCookies + cookiesPerSecond);
  }, 1000);


  return (
    <>
      {" "}
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
