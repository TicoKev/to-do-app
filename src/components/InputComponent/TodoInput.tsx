import type { ChangeEvent, KeyboardEvent } from 'react'

type TodoInputProps = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleInput?:(e: KeyboardEvent<HTMLInputElement>) => void
  inputValue: string
  className?: string
}
export default function TodoInput({ handleChange, handleInput, inputValue, className } : TodoInputProps) {
   
  return (
    <div className='text-black'>
      
      <input 
        className= {className}
        type='text' 
        onChange={handleChange}
        onKeyDown={handleInput}
        value={inputValue}
        placeholder='Type your task'
      />

    </div>
  )
}
