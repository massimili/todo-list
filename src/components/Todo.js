import React, { useState } from "react";
import Button from 'react-bootstrap/Button';


export default function Todo(props) {

    const done = (<del>{props.name}</del>)
    const toDo = props.name

    return <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-6">
            {props.completed ? done : toDo}

        </div>
        <div className="col-sm-1">

            <Button variant="success" onClick={() => props.toggleTaskCompleted(props.id)}>V</Button>
        </div>
        <div className="col-sm-1">
            <Button variant="danger" onClick={() => props.deleteTask(props.id)}>X</Button>
        </div>
    </div>
}


