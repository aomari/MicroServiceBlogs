import React from "react";
import axios from "axios";

export default function PostCreate() {
  const [title, setTitle] = React.useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/posts", {
      title,
    });
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          style={{
            marginTop: "10px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
