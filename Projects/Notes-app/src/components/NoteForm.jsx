import {useEffect} from 'react'

function NoteForm({notes,setNotes,editID,setEditID, dark}) {
    useEffect(() => {
    if (editID !== null) {
        const currentNote = notes.find((note) => note.id === editID);

        if (currentNote) {
            document.querySelectorAll('.td')[0].value = currentNote.title;
            document.querySelectorAll('.td')[1].value = currentNote.description;
        }
    }
}, [editID, notes]);
    const addNote = () => {
        if(editID === null){
            let count = notes.length;
            count++;
            const form = document.querySelector('#noteform');
            const title = document.querySelectorAll('.td')[0].value;
            const desc = document.querySelectorAll('.td')[1].value;
            let note = [...notes ,{
                id: count,
                title: title,
                description: desc,
                pinned: false
            }]  
            setNotes(note);
            form.reset();
        } else{
            const form = document.querySelector('#noteform')
            const title = document.querySelectorAll('.td')[0].value;
            const desc = document.querySelectorAll('.td')[1].value;
            const updatednote = notes.map(note=>{
                if(note.id == editID){
                    return {
                        ...note,
                        title: title,
                        description: desc
                    }
                }
                return note;
            })
            setNotes(updatednote);
            setEditID(null);
            form.reset();
        }
    }
    return (
    <form onSubmit={(e)=>{e.preventDefault(); addNote()}} id='noteform' className={`duration-300 w-245 rounded border-2 h-76 mt-4 flex flex-col flex-wrap mx-auto ${
    dark
      ? "bg-gray-800 border-gray-600 text-black"
      : "bg-white border-black text-black"
  }`}>
        <h6 className='ml-6 my-2 font-bold text-gray-500'>Title</h6>
        <input required type="text"  className= 'td bg-slate-300 border-y-2 outline-none mx-auto border-2 border-gray-500 w-[95%] p-2 rounded h-11' placeholder='Note Title' />
        <h6 className='ml-6 my-2 font-bold text-gray-500'>Description</h6>
        <textarea required className='td resize-none h-24 bg-slate-300 border-y-2 outline-none mx-auto border-2 border-gray-500 w-[95%] p-2 rounded' placeholder='Note Description...' ></textarea>
        <button type='submit' className='border-2 w-30 mt-6 ml-6 px-3 py-2 rounded bg-blue-500 text-white hover:bg-blue-800 cursor-pointer'>{editID===null?'Add Note':'Update Note'}</button>
    </form>
    )
}

export default NoteForm
