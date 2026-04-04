import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numbers,setNumbers] = useState(false)
  const [characters,setCharacters] = useState(false)
  const [password,setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbers) str+="0123456789"
    if(characters) str+="!@#$%^&*()_+-=[]{}~`"

    for(let i = 1;i<=length;i++){
    let char = Math.floor(Math.random()*str.length)
    pass+=str.charAt(char)
    }
    setPassword(pass)

  },[length,numbers,characters,setPassword])
  useEffect(()=>{
    passwordGenerator()
  },[length,numbers,characters,passwordGenerator])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)

  },[password])

  return (
    
      <div className='w-full max-w-150 mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden pb-4'> 
          <input 
          type="text"
          value={password}
          className='outline-none w-full h-12 py-3 px-5 mt-1 bg-white text-gray-800 rounded-l'
          placeholder='password'
          readOnly
          ref={passwordRef}
           />
          <button onClick={copyPassword} className='bg-green-500 text-white cursor-pointer hover:bg-green-800 h-12 mt-1 rounded-r w-30'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={numbers}
            id='numberInput'
            onChange={()=>{setNumbers((prev)=>!prev)}}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={characters}
            id='charInput'
            onChange={()=>{setCharacters((prev)=>!prev)}}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    
  )
}

export default App
