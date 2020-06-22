import React from 'react';

export function Cell (props) {
    let onCellClick = () =>{
        props.onCellClick(props.coords[0],props.coords[1])
    }
    return(
        <div
            className={props.className}
            id={props.id}
            onClick={onCellClick}
        />
    )
}