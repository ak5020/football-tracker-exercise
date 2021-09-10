import React from "react";
import Cards from "./components/Cards";
import "./styles.css";

export default function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col">
          <Cards />
        </div>
      </div>
    </div>
  );
}
