import { useState } from 'react'
import SearchBar from './components/SearchBar'
import NoteForm from './components/NoteForm'
import NoteCard from './components/NoteCard'
function App() {
  const [count, setCount] = useState(0)
  const [notes,setNotes] = useState({})
  return (
    <div className='w-full min-h-screen bg-slate-300 flex flex-col flex-wrap'>
      <SearchBar/>
      <div className='ml-70 mt-10 font-bold text-2xl cursor-default'>
        <h1>Add New Note</h1>
        <div className='w-245 mt-3 border-gray-400 border-b-2'></div>
      </div>
      <NoteForm/>
      <div className='w-237 mx-auto grid grid-cols-3 gap-4'>
        <NoteCard/>
        <NoteCard/>
        <NoteCard/>
      </div>
    </div>
  )
}

export default App
