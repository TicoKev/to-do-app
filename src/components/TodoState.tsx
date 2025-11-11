import Button from '../shared/Button'
import { MdCheck, MdEdit, MdOutlineDelete }  from 'react-icons/md'


type TodoStateProps = {
  index: number
  options: boolean[]
  completed: boolean
  toggleOptionsList: (index: number) => void
  handleDelete: (index: number) => void
  handleComplete: (index: number) => void
  handleEditTodo: (index: number) => void
}

export default function TodoSate({ completed, index, options, toggleOptionsList, handleDelete, handleComplete, handleEditTodo } : TodoStateProps) {
  
  
   
  return (
    <>

        <div>
          <Button
            value={completed ? 'Completed' : 'Pending'}
            onClick={() => toggleOptionsList(index)}
            className={`text-white px-2 py-1 rounded shadow-md ${completed ? 'bg-green-600' : 'bg-orange-400'}`}
          />

          {options[index] && (
            <div className='absolute right-2 mt-2 bg-gray-100 rounded shadow z-50 p-2'>
              <ul className='flex flex-col gap-2 m-2'>

                <div className='flex items-center gap-2'>
                  <MdEdit/>
                  <Button 
                    className=' w-full' 
                    value='Edit' 
                    onClick={()=>{
                      handleEditTodo(index)
                      toggleOptionsList(index)
                    }}
                  />
                </div>

                <div className='flex items-center gap-2'>
                  <MdCheck />
                  <Button 
                    className='w-full'  
                    value='Completed' 
                    onClick={()=> handleComplete(index)}
                  />
                </div>

                <div className='flex items-center gap-2'>
                  <MdOutlineDelete />
                  <Button 
                    className=' w-full' 
                    value='Delete'
                    onClick={ () => {
                      handleDelete(index)
                      toggleOptionsList(index)
                    }} 
                  />
                </div>

              </ul>
            </div>
          )}
        
        </div> 

    </>
  )
}
