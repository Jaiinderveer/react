import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import NoteForm from './components/NoteForm'
import NoteCard from './components/NoteCard'
function App() {  
  const [notes, setNotes] = useState(() => {
  return JSON.parse(localStorage.getItem("notes")) || [];
  });
  const [editID,setEditID] = useState(null);
  const [search,setSearch] = useState("");
  const savedTheme = localStorage.getItem("dark")
  const [dark, setDark] = useState(savedTheme?JSON.parse(savedTheme):false);

  useEffect(()=>{
    localStorage.setItem("dark",JSON.stringify(dark));
  },[dark])
  useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(notes));
  },[notes])
  const deleteNote = (id)=>{
        setNotes(notes.filter(note=>note.id!=id))
    }
  const editNote = (note)=>{
    setEditID(note.id)
  }
  const togglePin = (id)=>{
    setNotes(notes.map((note)=>
      note.id===id ? {...note,pinned: !note.pinned} : note
    ));
  }
  const filteredNotes = notes.filter((note)=>note.title.toLowerCase().includes(search.toLowerCase())||note.description.toLowerCase().includes(search.toLowerCase()))
  
  const sortedNotes = [...filteredNotes].sort((a,b)=>b.pinned-a.pinned);
  
  return (
    <div className={dark? "duration-300 bg-gray-900 text-white w-full min-h-screen  flex flex-col flex-wrap" : "bg-slate-300 w-full min-h-screen  flex flex-col flex-wrap duration-300"}>
      <button onClick={()=>setDark(!dark)} className={dark?"bg-white text-black absolute right-4 top-9 w-30 px-3 py-2 rounded  cursor-pointer":"absolute right-4 top-9 w-30 px-3 py-2 rounded  cursor-pointer bg-black text-white"}>{dark?"Light Mode":"Dark Mode"}</button>
      <SearchBar setSearch = {setSearch} dark = {dark}/>
      <div className='ml-70 mt-10 font-bold text-2xl cursor-default'>
        <h1>Add New Note</h1>
        <div className='w-245 mt-3 border-gray-400 border-b-2'></div>
      </div>
      <NoteForm notes = {notes} setNotes = {setNotes} editID = {editID} setEditID = {setEditID} dark={dark}/>
      <div className='w-237 mx-auto grid grid-cols-3 gap-4'>
        {filteredNotes.length===0?(<p className='text-center text-gray-500 mt-10 text-3xl font-bold'>No notes found</p>) :(sortedNotes.map((note)=>(
          <NoteCard key={note.id} note = {note} onDelete = {deleteNote} onEdit = {editNote} onPin = {togglePin} dark={dark}/>
        )))}
      </div>
    </div>
  )
}

export default App
