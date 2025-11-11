import type { TodoProperties } from '../../shared'
import TodoSate from '../TodoState'
import { useEffect, useState } from 'react'

type todoListProps = {
  todoList: TodoProperties[]
  handleDelete: (index: number) => void
  handleComplete: (index: number) => void
  handleEditTodo: (index: number) => void

}

export default function TodoList({ todoList, handleDelete, handleComplete, handleEditTodo } : todoListProps) {
   
  const [options, setOptions] = useState<boolean[]>([])

  useEffect(() => {
    setOptions(new Array(todoList.length).fill(false));
    }, [todoList]);

  const toggleOptionsList = (index: number) => {
    setOptions((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div>

      <ul className='mt-10 mx-7 flex flex-col gap-5'>
        {todoList.map((todo, index) => (
          <li key={index}>

            <div className='border-t border-t-gray-300 text-xl flex justify-between items-center text-center mb-2 mx-2 pt-2 px-2 md:px-4'>

              <p>{todo.text}</p>

              <div>

                <TodoSate 
                  index={index} 
                  options={options} 
                  toggleOptionsList={toggleOptionsList} 
                  handleDelete={handleDelete}
                  handleComplete={handleComplete}
                  handleEditTodo={handleEditTodo}
                  completed={todo.completed!}
                />

              </div>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  )
}
