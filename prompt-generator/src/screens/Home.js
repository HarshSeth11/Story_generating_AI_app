import React from "react";
import LeaderBoard from "../components/LeaderBoard";
import Form from "../components/Form";
import "../styles/display.css";
import { Link } from "react-router-dom";

export default function Home() {
  const fetchData = async () =>{
    await fetch("http://localhost:5000/api/getData")
  }
  return (
    <>
      <div className="left-part">
        <Link to="/display" className="link" onLoad={fetchData}>
          <LeaderBoard />
        </Link>
      </div>
      <div className="right-part">
        <Form />
      </div>
    </>
  );
}
