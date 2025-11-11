import TodoInput from './InputComponent/TodoInput';
import Button from '../shared/Button';
import TodoList from './TodoItemComponent/TodoList';
import useTodos from '../hooks/useTodos';


export default function MainPage() {

  const {
        todo,
        todoList,
        editIndex,
        editText,
        handleChange,
        handleInput,
        handleAddTodo,
        handleComplete,
        handleEditTodo,
        handleEditConfirm,
        handleDelete,
        setEditIndex,
        setEditText
      } = useTodos()

  return (

    <>
      <div className='flex gap-3 justify-center mt-5 mx-2 px-3'>
        <TodoInput 
          handleChange={handleChange} 
          handleInput={handleInput} 
          inputValue={todo} 
          className='border border-none py-1.5 px-2 w-72 rounded-md shadow-md bg-gray-200 font-montserrat md:w-80 md:py-2'
        />
        <Button 
          value='Add'
          onClick={handleAddTodo} 
          className='text-white border-none px-5 py-1.5 text-center rounded-md font-bold bg-green-700 shadow-md md:px-7 md:py-2'
        />
      </div>

      <div className=''>
        <TodoList 
          todoList={todoList} 
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          handleEditTodo={handleEditTodo}
        />
        
        {editIndex !== null  && (
          <div className='flex gap-2 justify-center mt-4'>
            <input
              type='text'
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className='border px-2 py-1 rounded-md w-72'
            />
            <Button
              value='Save'
              onClick={handleEditConfirm}
              className='bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600'
            />
            <Button
              value='Cancel'
              onClick={() => {
                setEditIndex(null);
                setEditText('');
              }}
              className='bg-gray-300 px-4 py-1 rounded hover:bg-gray-400'
            />
          </div>
        )}

      </div>
    </>

  )
}
