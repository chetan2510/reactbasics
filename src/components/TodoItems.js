import React, {Component} from "react";
import PropTypes from "prop-types";

export class TodoItems extends Component {

    // we can do the styling like this for the specific values coming as props
    // using this syntax so we don't have to use bind
    getStyle = () => {
           return {
               background: '#f4f4f4f4',
               padding: '10px',
               borderBottom: '1px #ccc dotted',
               textDecoration : this.props.todo.completed ? 'line-through' : 'none'
           }
    }

    getButttonStyle = () => {
        return {
            background: '#ff0000',
            color: '#fff',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '50%',
            cursor: 'pointer',
            float: 'right'

        }
    }

    // buttonClicked = () => {
    //     alert("hello");
    // }

    // we can add the things like this when passinf from the functions
    // using checkbox, e is the argument we are passing from the function
    // markComplete = (e) => {
    //
    // }
    render() {

        // this is the way how we can pull the varibles out form the props
        const { id, title } =  this.props.todo;
        // printing the specific key-value pair
        return (

            // inline styling
            <div style={this.getStyle()}>

            {/*this says that proping out the mark complete to the caller tag
               the markComplete tag should be present in the caller tag see Todos.js
             */}

            {/* like this we can bind any values to the prop which is calling back, here we have given an id to it
                this binding will stay forever with this method*/}
            <input type = "checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                <button onClick={this.props.deleteButtton.bind(this, id)} style={this.getButttonStyle()}>X</button>
            <p> {this.props.todo.title} </p>
            </div>
        )
    }
}


// Validates that the object type is that only what we are expecting
TodoItems.propTypes = {
    todo: PropTypes.object.isRequired
}

// can add styling like this also
const itemStyle = {
    backgroundColor: '#f4f4f4'
}

export default TodoItems