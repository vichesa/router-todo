import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <h1
        style={{
          fontFamily: 'Patrick Hand',
          color: '#00A170',
          fontSize: '60px',
        }}
      >
        {' '}
        Todos App
      </h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
