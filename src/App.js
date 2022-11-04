import React from "react";
import "./App.css";
import AppProvider from "./context/AppProvider";
import TicTacToeGrid from "./components/TicTacToeGrid";

export const colors = {
  gray: "gray",
  lightpink: "lightpink"
};

function App() {
  return (
    <>
      <AppProvider>
        <TicTacToeGrid />
      </AppProvider>
    </>
  );
}

export default App;
