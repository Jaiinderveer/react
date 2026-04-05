import React from 'react'

function NoteForm() {
    const addNote = () => {
        
    }
    return (
    <form onSubmit={(e)=>{e.preventDefault()}} className='w-245 rounded border-black bg-white border-2 h-76 mt-4 flex flex-col flex-wrap mx-auto'>
        <h6 className='ml-6 my-2 font-bold text-gray-500'>Title</h6>
        <input type="text" className='bg-slate-300 border-y-2 outline-none mx-auto border-2 border-gray-500 w-[95%] p-2 rounded h-11' placeholder='Note Title' />
        <h6 className='ml-6 my-2 font-bold text-gray-500'>Description</h6>
        <textarea className='resize-none h-24 bg-slate-300 border-y-2 outline-none mx-auto border-2 border-gray-500 w-[95%] p-2 rounded' placeholder='Note Description...' ></textarea>
        <button onClick={addNote} type='submit' className='border-2 w-30 mt-6 ml-6 px-3 py-2 rounded bg-blue-500 text-white hover:bg-blue-800 cursor-pointer'>Add Note</button>
    </form>
    )
}

export default NoteForm
