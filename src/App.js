// Imports styles, react, molecontainer for both mole and molehills.
import "./App.css";
import { useState } from "react";
import MoleContainer from "./MoleContainer";

// App defined
function App() {
  let [score, setScore] = useState(0);

  const createMoleHill = () => {
    let hills = [];
    for (let i = 0; i < 9; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />);
    }
    // Return background image and hills.
    return (
      <div
        style={{
          backgroundImage: `url("https://cdn.pixabay.com/photo/2017/04/04/23/54/rush-2203494_960_720.jpg")`,
        }}
      >
        {hills}
      </div>
    );
  };
  // Return h1, score, and molecontainer.
  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      <p>{score}</p>
      {createMoleHill()}
    </div>
  );
}
// Export App.
export default App;
