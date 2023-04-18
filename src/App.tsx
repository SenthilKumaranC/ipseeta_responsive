import React from "react";
import "./App.css";
import ResourceManager from "./components/ResourceManager/ResouceManager";
import useMediaQuery from "./hooks/useMediaQuery";

export const MediaQueryContext = React.createContext(false);

function App() {
  
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <MediaQueryContext.Provider value={matches}>
      <div className="App">
        <ResourceManager></ResourceManager>
      </div>
    </MediaQueryContext.Provider>
  );
}

export default App;
