import React, {useState} from "react";

  

export const AddTodo=(props)=>{

    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault(); //so it doesnt reload page
        if(!title || !desc){
            alert("Title or Description cannot be blank -_-");
        }
        else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }

    return(    
        <div className = 'container'>
        <h3 className='my-3'>Add A Todo</h3>
        <form onSubmit={submit}>
    <div className="mb-3">
        <label htmlFor="todoTitle" className="form-label">Todo Title</label>
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="todoTitle" aria-describedby="emailHelp"/> {/*value={title} needed coz i set title to blank after submit*/}
        
    </div>
    <div className="mb-3">
        <label htmlFor="todoDesc" className="form-label">Todo Description</label>
        <input type='text' value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="todoDesc"/>
    </div>
    
    <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
    </form>
    </div>
)
}