import { useEffect, useState, type ChangeEvent, type KeyboardEvent } from "react";
import type { TodoProperties } from "../shared";

export default function useTodos () {
    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState<TodoProperties[]>(() => {
      const stored = localStorage.getItem('todos')
      return stored ? JSON.parse(stored) : []
      
    })
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [editText, setEditText] = useState('');
    
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todoList))
    }, [todoList])
  
        
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    
      }
  
      const handleInput = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (todo.trim()=== '') {
            alert('The task cannot be empty')
            return
          }
          const newTodo : TodoProperties = {
            text: todo,
            completed: false
          }
          setTodoList([newTodo, ...todoList])
          setTodo('')
          } 
      }
    
      const handleAddTodo = () => {
        if (todo.trim()=== '') {
          alert('The task cannot be empty')
          return
        }
        const newTodo : TodoProperties = {
          text: todo,
          completed: false
        }
        setTodoList([newTodo, ...todoList])
        setTodo('')
      }
  
      const handleComplete = (index: number) => {
        setTodoList((prev) =>
          prev.map((todo, i) =>
            i === index ? { ...todo, completed: true } : todo
          )
        )
      
        setTimeout(() => {
          handleDelete(index)
        }, 1500);
      }
    
      const handleEditTodo = (index: number) => {
        setEditIndex(index);
        setEditText(todoList[index].text);
      }
  
      const handleEditConfirm = () => {
        if (editText.trim() === '') {
          alert('The task cannot be empty');
          return;
        }
  
        setTodoList((prev) =>
          prev.map((todo, i) =>
          i === editIndex ? { ...todo, text: editText } : todo
          )
        )
  
        setEditIndex(null)
        setEditText('')
      }
  
      const handleDelete = (index: number) => {
        setTodoList((prev) => prev.filter((_, i) => i !== index))
  
        if (editIndex === index) {
          setEditIndex(null);
          setEditText('');
        }
      } 

      return {
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
      }
}