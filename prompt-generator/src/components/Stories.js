import React, { useState, useEffect } from "react";
import "../styles/Stories.css";


export default function Stories(props) {
  let i = 1;
  let [stories, setStories] = useState([]);

  const getData = async () => {
    let response = await fetch("http://localhost:5000/api/getData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    });

    response = await response.json();

    setStories(response);
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      {
        stories.length !== 0?
      stories.map((story) => (
          <div
            className="container1"
            onClick={() => props.CallBack(story.Prompt, story.Story)}
          >
            <p className="id">{i++}. </p>
            <p className="prompt">{story.Prompt.slice(0,42)}...</p>
            <p className="upvote">
              <i id="icon" className="fa-solid fa-heart" ></i>
              <br />
              {story.upVote}
            </p>
          </div>
      )):
      <h3>There is no entry yet.</h3>
      }
    </>
  );
}
