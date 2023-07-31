import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { LikeButton } from "./components/Buttons/LikeButton.jsx";
import { DislikeButton } from "./components/Buttons/DislikeButton.jsx";
import Retrocard from "./components/RetroBoard";

function App() {
  return <Retrocard></Retrocard>;
}
export default App;
