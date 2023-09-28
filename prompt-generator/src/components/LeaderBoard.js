import React from "react";
import Stories from "./Stories";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function LeaderBoard(props) {
  const navigate = useNavigate();
try {
  return (
    <>
      <Link to="/display" className="link">
        <div className="leaderBoard" style={{overflowY:'scroll', height:'98vh', overflowX:'clip'}}>
          <h1>Leader Board</h1>
          <Stories CallBack={props.CallBack} />
        </div>
      </Link>
    </>
  );
} catch (error) {
  navigate('/display')
}
  
}
