import Container from "./components/Container";
import InputContainer from "./components/Input.tsx";
import Summary from "./components/Summary/Summary.tsx";
import Task from "./components/Tasks/Task.tsx";

function App() {
  return (
    <div className="flex justify-center m-5">
      <div className="flex flex-col items-center">
        <div className="sm:w-[640px] border shadow p-10 flex flex-col gap-10">
          <Container title={"Summary"}>
            <Summary />
          </Container>
          <Container>
            <InputContainer />
          </Container>
          <Container title={"Tasks"}>
            <Task />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;