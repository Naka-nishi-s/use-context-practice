import React, { useContext } from "react";
import { FlagContext } from "./App";

export const Sample1 = () => {
  // valueを受け取る
  const { user, setUser } = useContext(FlagContext);
  console.log("sample1", user);

  return (
    <>
      <button onClick={() => setUser(12)}>sample1ボタン</button>
    </>
  );
};
