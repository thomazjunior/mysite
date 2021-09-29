import Job from "./Job";
import CardGallery from "react-card-image-gallery";
import "./JobList.css";

export default function JobList() {
  return (
    <div className="container">
      <div className="container__job">
          <Job />
      </div>
      <div>
          <Job className="container__job"/>
    </div>
    <div>
          <Job className="container__job"/>
    </div>
    </div>
  );
}


