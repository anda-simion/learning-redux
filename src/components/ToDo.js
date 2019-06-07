import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createToDo, deleteToDo } from '../redux/actions/actions';

class ToDo extends Component {
    constructor() {
        super();
        this.state = {
          title: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(e) {
        this.setState({title: e.target.value})
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.createToDo(this.state.title);
        this.setState({title: ""});
    };

    handleDelete(id) {
        this.props.deleteToDo(id);
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <h3>Add todo</h3>
                    <input 
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.title}
                    />
                    <input
                        type="submit"
                        value="Save"
                    />
                </form>
                <ul style={{listStyle: "none"}}>
                    {
                        this.props.todos.map(todo => (
                            <li key={todo.id}>
                                <span>{todo.todoName}</span>
                                <button onClick={() => this.handleDelete(todo.id)}>-</button>
                            </li>
                        ))
                    }
                </ul>
            </React.Fragment>
        )
    }
};

const mapStateToProps = (state) => (
    {
        todos: state.todos.todos,
    }
);


const mapDispatchToProps = (dispatch) => (
    {
        createToDo: (todoName) => dispatch(createToDo(todoName)),
        deleteToDo: (todoId) => dispatch(deleteToDo(todoId))
    }
);


export default connect(mapStateToProps, mapDispatchToProps)(ToDo);

