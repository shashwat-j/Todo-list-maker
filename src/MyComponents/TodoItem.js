import React from 'react'

export const TodoItem = ({todo, onDelete}) => {   //can take passed variables as either props or directly in a var (destructuring) like this
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>

            {/*  onClick={onDelete}   =>calls the onDelete function correctly but we cant pass value to it like this.     
             If we do {onDelete()} or {onDelete(todo)} then it gets called during redering and runs at start of program.
             So we will put it inside an arrow func like this: */}
            <button className="btn btn-small btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>

        </div>
    )
}
