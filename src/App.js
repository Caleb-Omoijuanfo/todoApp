import React from 'react';
import { IconButton, ListItemSecondaryAction, ListItemText, List, ListItem, Paper } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import Delete  from '@material-ui/icons/Delete';
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
        todo: 'Complete deploying nodejs App'
      },

      {
        id: 2,
        todo: 'Continue udemy authentication course'
      },

      {
        id: 3,
        todo: 'Go back to pure react book'
      },

      {
        id: 4,
        todo: 'Go back to pure react book'
      },

      {
        id: 5,
        todo: 'Go back to pure react book'
      },

      {
        id: 6,
        todo: 'Go back to pure react book'
      },

      {
        id: 7,
        todo: 'Go back to pure react book'
      },

      {
        id: 8,
        todo: 'Go back to pure react book'
      },

      {
        id: 9,
        todo: 'Go back to pure react book'
      }
    ]
  }


  render(){
    const { classes } = this.props;
    const { todos } = this.state;
    return(
      <div className="app">
        <Paper className="paper">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="What do you want to do?" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <div className="input-group-append">
                {/*<button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>*/}
                <button type="button" className="custom-button" >Add</button>
              </div>
            </div>
          </form>

          <List>
            {
              todos.map(todo => (
                <ListItem key={todo.id}>
                  <ListItemText className="list">{todo.todo}</ListItemText>
                  <ListItemSecondaryAction>
                    <IconButton
                      className={classes.button}
                      color="secondary"
                      onClick={this.handleClick}
                    ><Delete /></IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))
            }
          </List>

          <div className="button-group">
            <button type="button" className="custom-button">
              <i class="far fa-save"></i>Save
            </button>
            <button type="button" className="custom-button">
              <i class="fas fa-server"></i>Retrieve
            </button>
            <button type="button" className="custom-button">
              <i class="fas fa-times"></i>Todo
            </button>
            <button type="button" className="custom-button">
              <i class="fas fa-check"></i>Complete
            </button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
