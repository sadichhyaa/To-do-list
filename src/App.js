import { useState } from 'react';
import './App.css';
import Input from './components/Input';
// import Filter from './components/Filter';
import Todo from './components/Todo';

function App() {
  const [todoState, setTodoState] = useState([])
  const [selectedTab, setSelectedTab] = useState("filter")



  return (
    <div className="App">
      <Input setTodoState={setTodoState} />

      {selectedTab === "filter" && <Todo todoState={todoState} setTodoState={setTodoState} />}
      <select value={selectedTab} onChange={(e) => setSelectedTab(e.target.value)}>
        <option value="filter">Filter</option>

        <option value="completed">Completed</option>
        <option value="incompleted">Incompleted</option>
      </select>
      {selectedTab === "completed" && <Todo key={todoState.id} todoState={todoState} setTodoState={setTodoState} filterSelection={true} />}
      {selectedTab === "incompleted" && <Todo key={todoState.id} todoState={todoState} setTodoState={setTodoState} filterSelection={false} />}
    </div>
  );
}

export default App;
