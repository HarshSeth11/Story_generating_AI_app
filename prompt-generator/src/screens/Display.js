import React, { useState } from "react";
import LeaderBoard from "../components/LeaderBoard";
import { Link } from "react-router-dom";

export default function Display(props) {
  // To get the data from stories every time any story is clicked on th leaderboard.
  let [prompt, setPrompt] = useState(""); // prompt as a container to store value coming from stories component
  let [story, setStory] = useState(""); // story as a container to store value coming from stories component
  function CallBack(prompt, story1) {
    // console.log(prompt);
    setPrompt(prompt);
    setStory(story1);
  }

  return (
    <>
      <div className="left-part">
        <LeaderBoard CallBack={CallBack} />
      </div>
      <div className="right-part">
        <h1 style={{textAlign:'center', paddingTop:'10px'}}>Read Only</h1>
        <div className="textarea">
          <textarea
            name="Story"
            id="story"
            cols="120"
            rows="20"
            value={story}
          ></textarea>
          <Link to="/" className="btn btn-success">New Search</Link>
        </div>
        <div className="form mt-3">
          <form action="/">
            <input
              className="prompt1"
              type="text"
              name="Prompt"
              placeholder="Click the prompt on the LeaderBoard that you want to see..."
              value={prompt}
              style={{width:"95%"}}
            />
          </form>
        </div>
      </div>
    </>
  );
}
