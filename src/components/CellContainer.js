import React,{useState, useEffect} from 'react';
import {Cell} from "./Cell"

let mutation=0;

export function CellContainer() {
    let cols = 10;
    let rows = 10;

    const startGrid = (cols,rows)=> {

        let arr = new Array(cols);
        for(let i = 0; i < arr.length; i++){
            arr[i] = new Array(rows);
            for(let j = 0; j < rows; j++){
                arr[i][j] = 0
            }
        }
        return arr;
    }

    let [grid,setGrid] = useState(startGrid(cols, rows))
    let [next,setNext] = useState(startGrid(cols, rows))
    

    const onCellClick = (col,row)=>{
        let tempGrid = [...grid]
        
        if(tempGrid[col][row]){
            console.log("was one,now zero")
            tempGrid[col][row] = 0
        } else {
            console.log("was zero,now one")
            tempGrid[col][row] = 1
            console.log(tempGrid[col][row])
        }
        console.log("TEMPGRID:", tempGrid)
        setNext(tempGrid)
        
    }

    useEffect(()=>{
        setGrid(next)
    },[next])

    return (
        <>
            <h3>Hello CellContainer</h3>
            <div className="cell-container" style={{width:`${cols*18}px`}}>
                {
                    grid.map((rows,i) => {
                        console.log("render",grid[0][0])
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