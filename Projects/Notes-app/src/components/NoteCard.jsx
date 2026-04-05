import React from 'react'

function NoteCard(note) {
    return (
    <div className='w-72 rounded border-black bg-white border-2 h-60 mt-4 flex flex-col flex-wrap mx-auto'>
        <div className='ml-5 mt-5 font-bold text cursor-default'>
        <h1>s{note.title}</h1>
        <div className='w-[90%] mt-3 border-gray-400 border-b-2'></div>
        </div>
        <div className='ml-5 mt-5 mb-3 font-bold text cursor-default'>
        <p>test {note.description}</p>
        <div className='w-[90%] mt-10 border-gray-400 border-b-2'></div>
        </div>
        <div className='flex gap-4 ml-3 mt-4 w-full items-center'>
            <button className=' w-30 px-3 py-2 rounded bg-gray-300 text-blue-500 font-bold hover:bg-gray-400 hover:text-white cursor-pointer'>Edit</button>
            <button className=' w-30 px-3 py-2 rounded bg-red-500 text-white hover:bg-red-800 cursor-pointer'>Delete</button>
        </div>
    </div>
    )
}

export default NoteCard
