import React, { useContext } from "react";
import { FlagContext } from "./App";

export const Sample2 = () => {
  // valueを受け取る
  const { user, setUser } = useContext(FlagContext);
  console.log("sample2", user);

  return (
    <>
      <button onClick={() => setUser(10)}>sample2ボタン</button>
    </>
  );
};
