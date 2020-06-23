import React,{useState, useEffect} from 'react';
import {Cell} from "./Cell"


const possibilities = [
  [-1,-1],
  [-1,0],
  [-1,1],
  [0,1],
  [1,1],
  [1,0],
  [1,-1],
  [0,-1],
]
let mutation = 0
// NW  N   NE
// E   C   W
// SE  S   SW
const startGrid = (rows,cols)=> {

  let arr = new Array(rows);
  for(let i = 0; i < arr.length; i++){
    arr[i] = new Array(cols);
    for(let j = 0; j < rows; j++){
      arr[i][j] = 0
    }
  }
  return arr;
}



export function CellContainer() {

  let rows = 10;
  let cols = 10;

  const zeroarray= startGrid(rows,cols)
  const [grid,setGrid] = useState(zeroarray)
  const [next,setNext] = useState(zeroarray)
  const [running, setRunning] = useState(false)
  
  
  const onStart = () => {
    console.log("running")
    if (!running){
      return;
    };
    const oldgrid = JSON.parse(JSON.stringify(grid))
    const tempGrid = JSON.parse(JSON.stringify(grid))
  
    mutation += 1
    
    for(let i = 0; i < rows; i++){
      for(let j = 0; j < cols; j++){
        let neighbours = 0;
        possibilities.forEach(([x,y])=> {
          const nextI = i + x;
          const nextJ = j + y;
          if(nextI >= 0 && nextI<rows && nextJ >= 0 && nextJ < cols){
            neighbours += grid[nextI][nextJ] 
          }
        });
        if (neighbours < 2 || neighbours > 3){
          tempGrid[i][j] =  0;
        } else if (grid[i][j] === 0 && neighbours === 3) {
          tempGrid[i][j] = 1;
        }
      };
    }  
  
  
    setNext(tempGrid)
    
  }
  

  const onCellClick = (row, col)=>{
    let tempGrid = [...grid]
    
    if(tempGrid[row][col]){
      tempGrid[row][col] = 0
    } else {
      tempGrid[row][col] = 1
    }
    setNext(tempGrid)
      
  }

  const start = () => {
    setRunning(true)
    onStart()
    setInterval(() => onStart(),500)
  }
  

  useEffect(()=>{
    setGrid([...next])
  },[...next])
  
  return (
    <>
      <h3>Hello CellContainer</h3>
      <button onClick={start}>Start</button>
      <h5>{mutation}</h5>
      <div className="cell-container" style={{width:`${cols*18}px`}}>
        {
          grid.map((cols,i) => {
            return (
              cols.map((rows,j) => {
                
                let id = `${i}-${j}`
                let cellclass = grid[i][j] ? "cell alive" : "cell dead"
                let loc = [i,j]
                return (
                  <Cell
                    onCellClick={onCellClick}
                    className={cellclass}
                    id={id}
                    key={id}
                    coords={loc}
                  />
                )
              })
            )
              
          })
        }
      </div>
    </>
  )
}