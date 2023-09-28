import React, { useState, useEffect } from "react";
import "../styles/Stories.css";

// const topStories = [
//   {
//     id: 1,
//     Prompt: "In a world where emotions are bought and sold...",
//     Story:
//       "In a world where emotions are commodities, a scientist invents a device to generate them. Revolution erupts as people reclaim their feelings.",
//     upVote: 1000,
//   },
//   {
//     id: 2,
//     Prompt: "In a small coastal town haunted by the sea...",
//     Story:
//       "A mysterious shipwreck reveals the town's dark past, connecting it to eerie legends of the sea.",
//     upVote: 0,
//   },
//   {
//     id: 3,
//     Prompt: "In a society where memories can be erased...",
//     Story:
//       "A memory eraser discovers a world-changing secret in a painful memory, facing a moral dilemma.",
//     upVote: 0,
//   },
//   {
//     id: 4,
//     Prompt: "In a world where time flows backward for one person...",
//     Story: "Elara ages in reverse, cherishing life's moments in a unique way.",
//     upVote: 0,
//   },
//   {
//     id: 5,
//     Prompt: "In a city where music is forbidden...",
//     Story:
//       "In a silenced city, a young musician sparks a secret musical rebellion, kindling hope and change.",
//     upVote: 0,
//   },
// ];


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
            <p className="prompt">{story.Prompt.slice(0,33)}...</p>
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
