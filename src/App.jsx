import React from "react";
import { AuthPage } from "./pages";
import Header from "./components/header/Header";
import { Profile } from "./pages";
import Test from "./pages/Test";

function App() {
  return (
    <>
      <div>
        <Header />
        <Test />
      </div>
    </>
  );
}

export default App;
