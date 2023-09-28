import React, { useState } from "react";
import "../styles/form.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  let [value, setValue] = useState({
    Prompt: "",
    Story: "",
  });

  const handleSave = async (e) => {
    e.preventDefault();
    const reponse = await fetch("http://localhost:5000/api/createstory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Prompt: value.Prompt,
        Story: value.Story,
      }),
    });

    const json = await reponse.json();
    console.log(json);

    if (!json.success) {
      alert("Something went wrong");
    }
    if (json.success) {
      alert("Success");
      // typewriter();
      navigate("/");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:5000/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: value.Prompt,
      }),
    });

    const json = await response.json();
    setValue({ ...value, Story: json.message });
    console.log(value.Story);

    if (!json.success) {
      alert("Something went wrong");
    }
    if (json.success) {
      // alert("Success")
      navigate("/");
    }
  };

  const changeValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="textarea" id="typedtext">
        <textarea
          name="Story"
          id="story"
          cols="120"
          rows="25"
          value={value.Story}
          readOnly
        >
        </textarea>
        <button className="btn btn-success" onClick={handleSave}>
          Save
        </button>
        <Link to="/" className="btn btn-success mx-3">
          New Search
        </Link>
      </div>
      <div className="form" onSubmit={handleSubmit}>
        <form action="/">
          {/* {console.log(props.prompt)} */}
          <input
            className="prompt1"
            type="text"
            name="Prompt"
            placeholder="Enter the Prompt here"
            value={value.Prompt}
            onChange={changeValue}
          />
          <button className="btnn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
