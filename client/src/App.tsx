import "./App.css";
import { Practice } from "./Practice";
import ProfileUpdater from "./ProfileUpdater";
import { useState } from "react";
import Excersise from "./Excersise";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    return setCount((prev) => prev + 1);
  };
  return (
    <>
      <Practice />
      <ProfileUpdater />
      <Excersise count={count} increment={increment} />
    </>
  );
}

export default App;
