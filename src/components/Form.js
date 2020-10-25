import React, { useState } from "react";
import Formm from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Form(props) {
    const [name, setName] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }
    function handleChange(e) {
        setName(e.target.value);
    }
    return (

        <Formm className="form-inline" onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    Cose da fare
                </label>
            </h2>

            <input
                type="text"
                id="new-todo-input"
                className="input"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />

            <Button type="submit" variant="primary">
                Aggiungi
                </Button>


        </Formm >

    );
}

export default Form;