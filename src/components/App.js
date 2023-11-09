import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";
import usePersistedState from "../hooks/usePersistedState";

const App = () => {

    const [numCookies, setNumCookies] = usePersistedState(1000, 'num-cookies');
    const [purchasedItems, setPurchasedItems] = usePersistedState({
        cursor: 0,
        grandma: 0,
        farm: 0,
      }, 'items');


    return (
        <>
            <GlobalStyles />
            <Router>
                <Routes>
                    <Route path="/" element={<Home numCookies={numCookies} setNumCookies={setNumCookies} purchasedItems={purchasedItems} setPurchasedItems={setPurchasedItems} />} />
                    <Route path="/game" element={<Game numCookies={numCookies} setNumCookies={setNumCookies} purchasedItems={purchasedItems} setPurchasedItems={setPurchasedItems} />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
