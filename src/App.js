import React, { useState } from "react";
import Mode from "./Mode";

export default function App() {
  const [mode, setMode] = useState("light");
  // yaa chai useState hook use gareko xu ra initially light  store gareko xu
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  // togglemode vanne function banaako xu jataa chai codition laaako xu yeddi mode chai light xa vaney dark maa raakhne vanera yo chai mode maa clicked gardaa call garxa
  // setmode dark hudaa background gray color ko hos vanera set gareko xu
  // yeddi mode chai dark xa vane setmode chai light hunxa

  return (
    <>
      <Mode toggleMode={toggleMode} />
      {/* yaa chai togglemode thichyo vane togglemode call hunxa  */}
    </>
  );
}
