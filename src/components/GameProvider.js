import usePersistedState from "../hooks/usePersistedState";
import { createContext, useEffect } from "react";


export const GameContext = createContext(null);

export const items = [
    { id: "cursor", name: "Cursor", cost: 10, value: 1 },
    { id: "grandma", name: "Grandma", cost: 100, value: 10 },
    { id: "farm", name: "Farm", cost: 1000, value: 80 },
  ];


const GameProvider = ({ children }) => {
  const [numCookies, setNumCookies] = usePersistedState ( 1000 , "num-Cookies");

  const [purchasedItems, setPurchasedItems] = usePersistedState(
    {
      cursor: 0,
      grandma: 0,
      farm: 0,
    },
    "purchasedItems"
  );

  const calculateCookiesPerSecond = () => {
    return Object.keys(purchasedItems).reduce((acc, itemId) => {
      const numOwned = purchasedItems[itemId];
      const item = items.find((item) => item.id === itemId);
      const value = item.value;

      return acc + value * numOwned;
    }, 0);
  };

  const incrementCookies = () => {
    setNumCookies((c) => c + 1);
  };

  useEffect(() => {
    document.title = `${numCookies} cookies - Cookie Clicker Workshop`;

    return () => {
      document.title = "Cookie Clicker Workshop";
    };
  }, [numCookies]);

  useEffect(() => {
    const handleKeydown = (ev) => {
      if (ev.code === "Space") {
        incrementCookies();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });



  return (
    <GameContext.Provider
      value={{
        numCookies,
        setNumCookies,
        purchasedItems,
        setPurchasedItems,
        cookiesPerSecond: calculateCookiesPerSecond(),
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
