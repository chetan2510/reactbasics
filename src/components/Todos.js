import React, {Component} from 'react';
import TodoItems from "./TodoItems";
import PropTypes from "prop-types";

// created out own class
class Todos extends Component {

    render() {
        return this.props.todos.map((todo) => (

          // AIM to pass the single key-value pair of the json

          // Key is important as we are using maps so to tell about the unique thing
          // we need to give the key
          // markComplete is being called from TodoItems and once controller reaches here
          // it will do what ever is written inside the {} brackerts either we can call the
          // function in this class or we can prop is other js file
            // here we are proping it out
            <TodoItems key = {todo.id} todo = {todo} markComplete={this.props.markComplete} deleteButtton={this.props.deleteButtton}/>
            )
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteButtton: PropTypes.func.isRequired
}

export default Todos;