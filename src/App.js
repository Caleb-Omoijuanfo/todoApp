import React from 'react';
import { IconButton, ListItemSecondaryAction, ListItemText, List, ListItem, Paper } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import Delete  from '@material-ui/icons/Delete';
import { Input } from './Input';
import './App.css';

const styles = theme => ({
  button: {
    color: "orange"
  }
});

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        todo: 'Hello twe twe',
        status: false
      }
    ],
    input: ""
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      input: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.input === '') {
      alert("Input must not be empty");
    } else {
      this.setState(prevState => {
        return {
          todos: [...prevState.todos, {id: Date.now(), todo: this.state.input, status: false}],
          input: ''
        }
      })
    }
  };

  handleDelete = (id) => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(todo => todo.id !== id )
      }
    })
  };

  handleSave = () => {
    let todoState = this.state.todos;
    localStorage.setItem('todos', JSON.stringify(todoState));
    alert('Saved Successfully!!');
  };

  handleRetrieve = () => {
    let savedTodo = localStorage.getItem('todos');
    let retrieveTodo = JSON.parse(savedTodo);
    this.setState({
      todos: retrieveTodo
    })
  };

  handleCheck = (id) => {
    let data = this.state.todos;
    let newTodos = data.map(todo => {
      if (todo.id === id) {
        return Object.assign({}, todo, {status: !todo.status})
      }
      return todo;
    });
    this.setState({
      todos: newTodos
    })
  };

  handleTodo = () => {
    let savedTodo = localStorage.getItem('todos');
    let todos = JSON.parse(savedTodo);
    let undone = todos.filter(todo => todo.status === false);
    this.setState({
      todos: undone
    })
  }

  handleComplete = () => {
    let savedTodo = localStorage.getItem('todos');
    let todos = JSON.parse(savedTodo);
    let done = todos.filter(todo => todo.status === true);
    this.setState({
      todos: done
    })
  }

  render(){
    console.log(this.state.todos)
    const { classes } = this.props;
    const { todos, input } = this.state;
    return(
      <div className="app">
        <Paper className="paper">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group mb-3">
              <input onChange={this.handleChange} value={this.state.input} type="text" className="form-control" placeholder="What do you want to do?" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <div className="input-group-append">
                <button type="submit" className="custom-button">Add</button>
              </div>
            </div>
          </form>

          <List>
            {
              todos.map(todo => (
                <ListItem key={todo.id}>
                  <Input
                    checkFunction={() => this.handleCheck(todo.id)}
                    status={todo.status}
                  />
                  <ListItemText className="list">{todo.todo}</ListItemText>
                  <ListItemSecondaryAction>
                    <IconButton
                      className={classes.button}
                      color="secondary"
                      onClick={() => this.handleDelete(todo.id)}
                    ><Delete /></IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))
            }
          </List>

          <div className="button-group">
            <button type="button" className="custom-button" onClick={this.handleSave}>
              <i className="far fa-save"></i>Save
            </button>
            <button type="button" className="custom-button" onClick={this.handleRetrieve}>
              <i className="fas fa-server"></i>Retrieve
            </button>
            <button type="button" className="custom-button" onClick={this.handleTodo}>
              <i className="fas fa-times"></i>Todo
            </button>
            <button type="button" className="custom-button" onClick={this.handleComplete}>
              <i className="fas fa-check"></i>Complete
            </button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
