import * as React from "react";
import "./App.css";
import Header from "./Header";
import JobList from "./JobList";
<<<<<<< HEAD
import ColegeList from "./ColegeList"
=======
import Colege from "./Colege"
>>>>>>> 7b12197d41bac3538b4c06c71dfe3765b00d7b11
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
<<<<<<< HEAD
        <ColegeList />
      </div>

      <div className="colege">
        <h4>
          <HiAcademicCap size={25} />
          Destaques:
        </h4>
        <Destaques />
=======
        <Colege />
>>>>>>> 7b12197d41bac3538b4c06c71dfe3765b00d7b11
      </div>


      
    </div>
  );
}

export default App;
