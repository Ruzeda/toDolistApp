import { FormEvent, useState } from "react";

const InputContainer = ({
  handleSubmit,
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>, value: string) => void;
}) => {
  // Define a state variable 'newTaskName' and a function to update it.
  const [newTaskName, setNewTaskName] = useState("");

  return (
    <form
      action=""
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        // When the form is submitted, call the 'handleSubmit' function and pass the event object 'e' and 'newTaskName'.
        handleSubmit(e, newTaskName);
        // Clear the 'newTaskName' state variable after submitting the form.
        setNewTaskName("");
      }}
    >
      <div className='flex flex-col'>
        {/* Display a label for entering a new task. */}
        <label className="text-white">Enter your next task:</label>
        <input
          className="p-1 rounded-sm"
          type='text'
          value={newTaskName}
          // Update the 'newTaskName' state when the input value changes.
          onChange={(e) => setNewTaskName(e.target.value)}
        />
      </div>
      <button
        type='submit'
        // Style the submit button with CSS classes and hover effect.
        className="bg-pink-100 rounded-lg hover:bg-pink-200 p-1"
      >
        Add Task
      </button>
    </form>
  );
};

export default InputContainer;
