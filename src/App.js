import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./redux/actions/gamesAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, []);

  return (
    <div className="App">
      <h1>Geeky Business</h1>
    </div>
  );
}

export default App;
