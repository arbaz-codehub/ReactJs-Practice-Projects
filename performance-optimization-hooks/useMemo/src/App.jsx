import { useState, useMemo } from "react";
import "./App.css";

const students = [
  { id: 1, name: "Alice", score: 85 },
  { id: 2, name: "Bob", score: 92 },
  { id: 3, name: "Charlie", score: 78 },
  { id: 4, name: "David", score: 95 },
  { id: 5, name: "Eva", score: 70 },
];

function App() {
  const [filterScore, setFilterScore] = useState(80);

  // Expensive calculation: Filtering students based on their scores
  const filteredStudents = useMemo(() => {
    console.log("Filtering students...");
    return students.filter((student) => student.score > filterScore);
  }, [filterScore]);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <label>
        Minimum Score:
        <input
          type="number"
          value={filterScore}
          onChange={(e) => setFilterScore(Number(e.target.value))}
        />
      </label>

      <h2>Filtered Students:</h2>
      <ul>
        {filteredStudents.map((student) => (
          <li key={student.id}>
            {student.name} - {student.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
