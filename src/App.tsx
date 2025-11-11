import MainPage from './components/MainPage'
import { MdChecklist } from "react-icons/md"


function App() {
  return (
    <div className='bg-gray-100 min-h-screen md:text-xl'>
      <div className='flex items-center gap-2 ml-6 py-3'>
        <MdChecklist className='text-6xl'/>
        <h1 className='text-5xl mb-3 p-3 font-medium'>To-Do App</h1>

      </div>
      <MainPage />
    </div>
  )
}

export default App
