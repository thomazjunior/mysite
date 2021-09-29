import * as React from "react";
import "./App.css";
import Header from "./Header";
import JobList from "./JobList";
import ColegeList from "./ColegeList"
import { FcBusinessman } from "react-icons/fc";
import {HiAcademicCap} from "react-icons/hi";
import Destaques from "./Destaques";

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
        <JobList />
      </div>

      <div className="colege">
        <h4>
          <HiAcademicCap size={25} />
          Experiências Acadêmicas:
        </h4>
        <ColegeList />
      </div>

      <div className="colege">
        <h4>
          <HiAcademicCap size={25} />
          Destaques:
        </h4>
        <Destaques />
      </div>


      
    </div>
  );
}

export default App;
