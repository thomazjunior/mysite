import * as React from "react";
import "./App.css";
import Header from "./Header";
import Job from "./Job";
import { FcBusinessman } from "react-icons/fc";
import {HiAcademicCap} from "react-icons/hi";

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>

      <div className="job">
        <h4>
          <FcBusinessman size={25} />
          Experiências Profissionais:
        </h4>
        <Job />
      </div>

      <div className="colege">
        <h4>
          <HiAcademicCap size={25} />
          Experiências Acadêmicas:
        </h4>
        <Job />
      </div>


      
    </div>
  );
}

export default App;
