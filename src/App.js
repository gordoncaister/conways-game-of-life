import React from 'react';
import './App.css';
import { CellContainer } from "./components/CellContainer"
function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <CellContainer/>
    </div>
  );
}

export default App;

// CellContainer.js:62 0,0: neighbours: 2
// CellContainer.js:62 0,1: neighbours: 3
// CellContainer.js:62 0,2: neighbours: 2
// CellContainer.js:62 0,3: neighbours: 0
// CellContainer.js:62 0,4: neighbours: 0
// CellContainer.js:62 1,0: neighbours: 5
// CellContainer.js:62 1,1: neighbours: 4
// CellContainer.js:62 1,2: neighbours: 2
// CellContainer.js:62 1,3: neighbours: 0
// CellContainer.js:62 1,4: neighbours: 0
// CellContainer.js:62 2,0: neighbours: 2
// CellContainer.js:62 2,1: neighbours: 2
// CellContainer.js:62 2,2: neighbours: 2
// CellContainer.js:62 2,3: neighbours: 0
// CellContainer.js:62 2,4: neighbours: 0
// CellContainer.js:62 3,0: neighbours: 3
// CellContainer.js:62 3,1: neighbours: 3
// CellContainer.js:62 3,2: neighbours: 2
// CellContainer.js:62 3,3: neighbours: 0
// CellContainer.js:62 3,4: neighbours: 0
// CellContainer.js:62 4,0: neighbours: 2
// CellContainer.js:62 4,1: neighbours: 2
// CellContainer.js:62 4,2: neighbours: 1
// CellContainer.js:62 4,3: neighbours: 0
// CellContainer.js:62 4,4: neighbours: 0