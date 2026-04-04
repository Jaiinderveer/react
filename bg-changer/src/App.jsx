import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white rounded-3xl px-3 py-2 ">
            <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-3xl bg-red-500 hover:bg-red-800 cursor-pointer text-white shadow-lg'>Red</button>
            <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-3xl text-white shadow-lg bg-green-500 hover:bg-green-800 cursor-pointer' >Green</button>
            <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-3xl text-white shadow-lg bg-blue-500 hover:bg-blue-800 cursor-pointer'>Blue</button>
            <button onClick={()=>setColor("olive")} className='outline-none px-4 py-1 rounded-3xl text-white shadow-lg bg-olive-500 hover:bg-olive-800 cursor-pointer' >Olive</button>
            <button onClick={()=>setColor("gray")} className='outline-none px-4 py-1 rounded-3xl text-white shadow-lg bg-gray-500 hover:bg-gray-800 cursor-pointer'>Gray</button>
            <button onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-3xl text-black shadow-lg bg-yellow-500 hover:bg-yellow-800 cursor-pointer'>Yellow</button>
            <button onClick={()=>setColor("pink")} className='outline-none px-4 py-1 rounded-3xl text-black shadow-lg bg-pink-500 hover:bg-pink-800 cursor-pointer'>Pink</button>
            <button onClick={()=>setColor("purple")} className='outline-none px-4 py-1 rounded-3xl text-white shadow-lg bg-purple-500 hover:bg-purple-800 cursor-pointer' >Purple</button>
            <button onClick={()=>setColor("lavender")} className='outline-none px-4 py-1 rounded-3xl text-black shadow-lg bg-gray-200 hover:bg-gray-300 cursor-pointer'>Lavender</button>
            <button onClick={()=>setColor("white")} className='outline-none px-4 py-1 rounded-3xl text-black shadow-lg bg-white hover:bg-gray-100 cursor-pointer' >White</button>
            <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-3xl text-white shadow-lg bg-black cursor-pointer' >Black</button>
          </div>
        </div>
      </div>
  )
}

export default App
