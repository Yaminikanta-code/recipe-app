import React from "react";
import { AuthPage } from "./pages";
import Header from "./components/header/Header";
import { Profile } from "./pages";

function App() {
  return (
    <>
      <div>
        <Header />
        <Profile />
      </div>
    </>
  );
}

export default App;
