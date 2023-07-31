import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import { LikeButton } from "./Buttons/LikeButton.jsx";
import { DislikeButton } from "./Buttons/DislikeButton.jsx";
import { RetroItems } from "../components/RetroItems.jsx";

export default function RetroBoard() {
  return (
    <main class="content row">
      <h1>Retro Board</h1>
      {/* <!-- Layout changer --> */}
      <div>
        {" "}
        Layout &nbsp;<button className="button button-default">Desktop</button>
        <button className="button button-default">Mobile</button>
      </div>

      {/* <!-- The class "row" is for the layout changer --> */}
      <div className="RetroApp row">
        {/* <!-- Retro category --> */}
        <div className="RetroCategory RetroCategory-1">
          <h2>Went Well</h2>
          {/* <!-- Add a new card button --> */}
          <RetroItems></RetroItems>

          <div className="button-group">
            <div></div>
          </div>
        </div>

        {/* <!-- Retro category --> */}
        <div class="RetroCategory RetroCategory-2">
          <h2>To Improve</h2>

          <RetroItems></RetroItems>
        </div>

        {/* <!-- Retro category --> */}
        <div class="RetroCategory RetroCategory-3">
          <h2>Action Items</h2>

          <RetroItems></RetroItems>
        </div>
      </div>
    </main>
  );
}
