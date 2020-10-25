import React, { useState } from "react";
import Button from 'react-bootstrap/Button';


export default function Todo(props) {
    const [isEditing, setEditing] = useState(false);
    const done = (<del>{props.name}</del>)
    const toDo = props.name

    return <div className="row">
        <div className="col">
            {props.completed ? done : toDo}

        </div>
        <div className="col">
            <Button variant="success" onClick={() => props.toggleTaskCompleted(props.id)}>V</Button>

        </div>
        <div className="col">
            <Button variant="danger" onClick={() => props.deleteTask(props.id)}>X</Button>
        </div>
    </div>
}


