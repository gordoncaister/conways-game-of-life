import React from 'react';
function Rules() {
    return (
      <div className="rules">
        <h3>Rules:</h3>
        <p>1) Any live cell with two or three cells survivces</p>
        <p>2) Any dead cell with three live neighbours becomes a live cell</p>
        <p>3) All other cells die or stay dead.</p>
      </div>
    );
  }

export default Rules