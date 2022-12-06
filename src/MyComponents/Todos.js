import React from 'react';
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    let myStyle={
        minHeight: "45vh",
        margin: "40px auto"
    }

    return (
        <div className="container todos" style={myStyle}>
            <h3 className="my-3">Todo List</h3>
            {props.todos.length>0? props.todos.map((pine)=>{      //like 'for pine in props.todos' in pyhton (maybe) (props.todos is array)
                return(
                    <>
                    <TodoItem key={pine.sno} todo={pine} onDelete={props.onDelete}/>
                    <hr/>
                    </>
                )
            }): <p>Nothing to do. Have fun.</p>
            }
        </div>
    )
}
