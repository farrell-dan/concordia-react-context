import ReactDOM from "react-dom";

import App from "./components/App";
import GameProvider from "./components/GameProvider";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <GameProvider>
    <App />
  </GameProvider>,
  rootElement
);
