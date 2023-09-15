import { useState } from "react";
import "./App.css";
import defaultPlayers from "./players";
import Search from "./components/players/Search";
import Available from "./components/players/Available";

const App = () => {
  const [players, setPlayers] = useState(defaultPlayers);

  return (
    <>
      <Search players={defaultPlayers} setPlayers={setPlayers} />
      <Available players={players} />
    </>
  );
};

export default App;
