import React, {Component} from 'react';
import './App.css';
import Todos from "./components/Todos";

// Basic application when created gives us this
class App extends Component {

  // we have added states here, it just like passing json
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'learn react',
        completed: true
      },
      {
        id: 3,
        title: 'learn data structure and algorithm',
        completed: false
      }
    ]
  }


  markComplete = (id) => {
   this.setState({ todos : this.state.todos.map(todo => {
     if(todo.id == id ) {
       todo.completed = !todo.completed;
     }
     return todo;
     })})
  }

  deleteButtton = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id != id)]})
  }
  // render basically return backs the html page with proper css
  render() {
    return (
        <div className="App">

          {/*Passing whole object as json*/}
          {/*
          passing the object(todos) as props
          this will be retrived in the other component that is Todos

          markComplete is being propped out from TodoItems --> todos --> App.js
          over here we are calling markComplete method in which we can do the stuffs

          So basically props can be used from here to next js page and vice-versa
          */}
          <Todos todos={this.state.todos} markComplete = {this.markComplete} deleteButtton={this.deleteButtton}/>
        </div>
    );
  }

}

// this is very important as without this application will not work
export default App;
