import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header"; //no braces coz export default kiya tha (using rfc)
import { Footer } from "./MyComponents/Footer"; //braces coz export default nahi kiya tha (using rafc)
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import {About} from "./MyComponents/About";
import React, { useState ,useEffect } from 'react'; //in react, updating the value of a var does not re render the html on screen. for that we have usestate hook
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; //installed react-router-dom version 5 coz new version has replaced switch with something else

function App() {

  let initTodo; //initial todo
  if(localStorage.getItem("todos")==null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo)=>{

    setTodos(todos.filter((myvar)=>{
      return myvar !== todo;
    }));  //filter is a higher order array method that goes thru each elemetns in todos array, aur uske andar ek function daalenge which receives each array element, and if funtion returns true, that element is added to the new array which filter returns
  }

  const [todos, setTodos] = useState(initTodo);  //todos= var(jo useState ke andar daala) ; setTodos is a function (conventionally we name it setXyz) which will be used to change value of todos
  

  const addTodo = (title,desc)=>{
    //console.log(title,desc);
    let serialno;
    if(todos.length === 0)
      serialno = 0;
    else
      serialno = todos[todos.length-1].sno + 1;
    const myTodo = {
      sno: serialno,
      title: title,
      desc:desc 
    }
    setTodos([...todos, myTodo]); //...array breaks array into its elements
    console.log(myTodo);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])   //jaise hi todos me change ho, run this func

  return (
    <>
    <Router>
    <Header title = "Tudu" searchBar = {true}/>   {/*calling header component and passing these values*/}
    <Switch>
      <Route exact path="/" render={()=>{
        return(
          <div className="app">
          <AddTodo addTodo={addTodo}/>
          <Todos todos={todos} onDelete={onDelete}/>    {/*we are also passing a method here! */}
          </div>
        )
        }}>
      </Route>
      <Route exact path="/about">  {/*if not write 'exact' then it will execute / wala even when address is /about or /xyz */}
        <About/>
      </Route>
    </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
