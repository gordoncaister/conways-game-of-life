import React,{useState, useEffect} from 'react';
import {Cell} from "./Cell"

export function CellContainer() {
    let cols = 10;
    let rows = 10;

    let startGrid = (cols,rows)=> {
        let arr = new Array(cols);
        for(let i = 0; i < arr.length; i++){
            arr[i] = new Array(rows);
        }
        return arr;
    }

    let [grid,setGrid] = useState(startGrid(rows,cols))

    for(let i = 0; i< cols; i++){
        for(let j = 0; j < rows; j++){
            grid[i][j] = 0
        }
    }

    const onCellClick = (col,row)=>{
        let tempGrid = grid
        if(tempGrid[col][row]){
            tempGrid[col][row] = 0
        } else {
            tempGrid[col][row] = 1
        }
        return setGrid(tempGrid)
        console.log(`${col},${row}: ${grid[col][row]}`)
    }
    


    
  

    return (
        <>
            <h3>Hello CellContainer</h3>
            <div className="cell-container" style={{width:`${cols*18}px`}}>
                {
                    grid.map((rows,i) => {
                        console.log("render")
                        return (
                            rows.map((cols,j) => {
                                
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