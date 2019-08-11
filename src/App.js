import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Meeting 1 with them',
        completed: false,
      },
      {
        id: 2,
        title: 'Meeting 1 with them',
        completed: false,
      },
      {
        id: 3,
        title: 'Meeting 1 with them',
        completed: true,
      }
    ]
  };

  markComplete = (id) =>{
      this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      }) })
  }

  render(){
    console.log(this.state.todos);
    return(
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
