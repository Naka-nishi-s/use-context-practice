import "./App.css";
import { createContext, useState } from "react";
import { Sample1 } from "./Sample1";
import { Sample2 } from "./Sample2";

type Value = {
  user: number;
  setUser: React.Dispatch<React.SetStateAction<number>>;
};

export const FlagContext = createContext<Value>({ user: 0, setUser: () => {} });

function App() {
  const [user, setUser] = useState<number>(15);

  return (
    <div className="App">
      <FlagContext.Provider value={{ user, setUser }}>
        <Sample1 />
        <Sample2 />
      </FlagContext.Provider>
    </div>
  );
}

export default App;
