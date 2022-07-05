import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TokenContext from "../TokenContext";
import Landingpage from "./views/landingpage";

function App() {
  const tokenState = useState({});
  return (
    <TokenContext.Provider value={tokenState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}

export default App;
