import { useState, FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "./components/Container";
import InputContainer from "./components/Input.tsx";
import Summary from "./components/Summary/Summary.tsx";
import TaskComponent from "./components/Tasks/Task.tsx";

export interface Task {
  name: string;
  done: boolean;
  id: string; 
}

function App() {
  // Define a state variable 'tasks' and a function to update it.
  const [tasks, setTasks] = useState<Task[]>([]);

  // Handle form submission when adding a new task.
  const handleSubmit = (e: FormEvent<HTMLFormElement>, value: string) => {
    e.preventDefault(); // Prevent the default form submission behavior.
    // Create a new task object with a name, 'done' status, and a unique ID.
    const newTask = {
      name: value,
      done: false,
      id: uuidv4(), // Generate a unique ID using uuidv4().
    };
    // Update the 'tasks' state by adding the new task to the existing tasks.
    setTasks((tasks) => [...tasks, newTask]);
  };

  // Toggle the 'done' status of a task.
  const toggleDoneTask = (id: string, done: boolean) => {
    // Update the 'tasks' state by mapping through the tasks and modifying the 'done' status of the specified task.
    setTasks((tasks) =>
      tasks.map((t) => {
        if (t.id === id) {
          t.done = done;
        }
        return t;
      })
    );
  };

  // Delete a task.
  const handleDeleteTask = (id: string) => {
    // Update the 'tasks' state by filtering out the task with the specified ID.
    setTasks((tasks) => tasks.filter((t) => t.id !== id));
  };
  
  return (
    <div className="flex justify-center m-5">
      <div className="flex flex-col items-center">
        <div className="border shadow p-10 flex flex-col gap-10 sm:w-[640px]">
          <Container title={"Summary"}>
            {/* Render the 'Summary' component and pass the 'tasks' state as a prop. */}
            <Summary tasks={tasks} />
          </Container>
          <Container>
            {/* Render the 'InputContainer' component and pass the 'handleSubmit' function as a prop. */}
            <InputContainer handleSubmit={handleSubmit} />
          </Container>
          <Container title={"Tasks"}>
            {/* Render the 'TaskComponent' component and pass the 'tasks', 'toggleDoneTask', and 'handleDeleteTask' functions as props. */}
            <TaskComponent
              tasks={tasks}
              toggleDone={toggleDoneTask}
              handleDelete={handleDeleteTask}
            />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
