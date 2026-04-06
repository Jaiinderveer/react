import React from 'react'

function NoteCard({note, onDelete, onEdit, onPin,dark}) {
    return (
    <div className={`duration-300 w-72 rounded border-2 h-60 mt-4 flex flex-col flex-wrap mx-auto ${
    dark
      ? "bg-gray-800 border-gray-600 text-white"
      : "bg-white border-black text-black"
  }`}>
        <div className='ml-5 mt-5 font-bold text cursor-default'>
        <h1>{note.title}</h1>
        <div className='w-[90%] mt-3 border-gray-400 border-b-2'></div>
        </div>
        <div className='ml-5 mt-5 mb-3 font-bold text cursor-default'>
        <p>{note.description}</p>
        <div className='w-[90%] mt-10 border-gray-400 border-b-2'></div>
        </div>
        <div className='flex gap-4 ml-6 mt-4 w-full items-center'>
            <button
                onClick={() => onEdit(note)}
                className={`px-3 py-2 rounded font-bold cursor-pointer ${
                    dark
                    ? "bg-gray-700 text-blue-400 hover:bg-gray-600"
                    : "bg-gray-300 text-blue-500 hover:bg-gray-400 hover:text-white"
                }`}
                >
                Edit
                </button>
            <button onClick={()=>onDelete(note.id)} className=' px-3 py-2 rounded bg-red-500 text-white hover:bg-red-800 cursor-pointer'>Delete</button>
            <input type="checkbox" id='pin' onChange={()=>onPin(note.id)} />
            <label
            htmlFor={`pin-${note.id}`}
            className={dark ? "text-white" : "text-black"}
            >
            Pin
            </label>
        </div>
    </div>
    )
}

export default NoteCard
