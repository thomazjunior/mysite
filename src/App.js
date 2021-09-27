import * as React from "react";
import "./App.css";
import Header from "./Header";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Body from "./Body";

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>

      <div className="body">
        <Body/>
      </div>
    </div>
  );
}

export default App;
