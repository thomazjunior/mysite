import Job from "./Job";
import "./JobList.css";

export default function JobList() {
  return (
    <div className="container">
      <div className="container__colege">
          <Job />
      </div>
      <div>
          <Job className="container__colege"/>
    </div>
    <div>
          <Job className="container__colege"/>
    </div>
    </div>
  );
}


