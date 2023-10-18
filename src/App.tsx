import { useState } from "react";
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

const initialTasks = [{
  name: "Task one",
  done: false,
  id: uuidv4(),
},
{
  name: "Task two",
  done: false,
  id: uuidv4(),
},
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  return (
    <div className="flex justify-center m-5">
      <div className="flex flex-col items-center">
        <div className="border shadow p-10 flex flex-col gap-10 sm:w-[640px]">
          <Container title={"Summary"}>
          <Summary tasks={tasks} />
          </Container>
          <Container>
            <InputContainer />
          </Container>
          <Container title={"Tasks"}>
            <TaskComponent tasks={tasks} />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;