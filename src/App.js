import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import Axios from "axios";

// Basic application when created gives us this
class App extends Component {

    // we have added states here, it just like passing json
    state = {
        todos: [
        ]
    }

   componentDidMount() {

        // Makes a https call to the json placeholder then sets the state usig {}
        Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=2')
            .then(res => this.setState({ todos: res.data}))
   }


    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id == id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    }

    deleteButtton = (id) => {
        this.setState({todos: [...this.state.todos.filter(todo => todo.id != id)]})
    }

    addTodo = (title) => {
      Axios.post('https://jsonplaceholder.typicode.com/todos', {
          title,
          completed: false
      }).then(res => this.setState({todos: [...this.state.todos, res.data]}))

    }

    // render basically return backs the html page with proper css
    render() {

        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header/>

                        {/*this route here is important as we are adding one route on this page if we will not add this it
                           will then show the new page with this link so the route needs to be added with the tag exact path as [/]
                           */}
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo}/>
                                {/*Passing whole object as json*/}
                                {/*
          passing the object(todos) as props
          this will be retrived in the other component that is Todos

          markComplete is being propped out from TodoItems --> todos --> App.js
          over here we are calling markComplete method in which we can do the stuffs

          So basically props can be used from here to next js page and vice-versa
          */}
                                <Todos todos={this.state.todos} markComplete={this.markComplete}
                                       deleteButtton={this.deleteButtton}/>

                            </React.Fragment>
                        )}/>

                        {/* This route over here is used to switch between the pages path = "/About" is the link to new page
                        that means url will change to ..../about and the component to be loaded will be About. Note c in component
                        in small*/}
                        <Route path="/about" component={About}/>
                    </div>
                </div>
            </Router>
        );
    }

}

// this is very important as without this application will not work
export default App;
