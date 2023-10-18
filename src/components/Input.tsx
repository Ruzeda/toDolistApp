const InputContainer = () => {
    return (
        <form action="" className="flex cflex-col gap-4">
            <div className='flex flex-col'>
                <label className="text-white">Enter your next task:</label>
                <input className="p-1 rounded-sm" />
            </div>
            <button
                type='button'
                className="bg-green-100 rounded-lg hover:bg-green-200 p-1"
            >
            Add Task
            </button>
        </form>
    );
};

export default InputContainer;