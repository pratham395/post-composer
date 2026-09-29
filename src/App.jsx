import { useState } from "react";
import "./App.css";

function App() {

  const [platform, setPlatform] = useState("Twitter");
  const [post, setPost] = useState("");

  const limit = platform === "Twitter" ? 280 : 3000;

  return (
    <div className="container">

      <h1>Post Composer</h1>

      <label>Select Platform:</label>

      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      >
        <option value="Twitter">Twitter</option>
        <option value="LinkedIn">LinkedIn</option>
      </select>

      <textarea
        placeholder="Write your post here..."
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />

      <p>
        Character Count: {post.length} / {limit}
      </p>

      {post.length > limit && (
        <p className="error">
          Error: Character limit exceeded!
        </p>
      )}

    </div>
  );
}

export default App;