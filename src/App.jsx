import { useState } from "react";
import "./App.css";
import defaultPlayers from "./players";
import Search from "./components/players/Search";
import Available from "./components/players/Available";

const App = () => {
  const [players, setPlayers] = useState(defaultPlayers);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <Search players={defaultPlayers} setPlayers={setPlayers} />
          <Available players={players} />
        </div>
      </div>
    </>
  );
};

export default App;
