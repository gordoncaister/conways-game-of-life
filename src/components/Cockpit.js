import React from 'react';
function Cockpit(props) {
    return (
      <div className="cockpit">
        <h5>Mutation #: {props.mutation}</h5>
        <button onClick={props.running? props.stop : props.start}>{props.running? "Stop" : "Start"}</button>
        <button onClick={props.random}>Random</button>
        <button onClick={props.clear}>Clear</button>
        <button onClick={props.pulsar}>Pulsar presets</button>
        <button onClick={props.step}>Step</button>
      </div>
    );
  }

export default Cockpit