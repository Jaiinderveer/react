import React from 'react'

function SearchBar() {
    return (
    <form onSubmit={(e)=>{e.preventDefault()}}className='w-300 rounded-2xl border-black bg-white border-2 h-20 mt-4 flex flex-wrap items-center mx-auto justify-center'>
        <img className='bg-slate-300 w-10 ml-3 h-11 border-y-2 border-gray-500 border-l-2 rounded-l-2xl p-2' alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxwYXRoIGQ9Ik0gMjEgMyBDIDExLjYyMjk5OCAzIDQgMTAuNjIzMDA1IDQgMjAgQyA0IDI5LjM3Njk5NSAxMS42MjI5OTggMzcgMjEgMzcgQyAyNC43MTIzODMgMzcgMjguMTM5MTUxIDM1Ljc5MTA3OSAzMC45Mzc1IDMzLjc2NTYyNSBMIDQ0LjA4NTkzOCA0Ni45MTQwNjIgTCA0Ni45MTQwNjIgNDQuMDg1OTM4IEwgMzMuODg2NzE5IDMxLjA1ODU5NCBDIDM2LjQ0MzUzNiAyOC4wODMgMzggMjQuMjIzNjMxIDM4IDIwIEMgMzggMTAuNjIzMDA1IDMwLjM3NzAwMiAzIDIxIDMgeiBNIDIxIDUgQyAyOS4yOTYxMjIgNSAzNiAxMS43MDM4ODMgMzYgMjAgQyAzNiAyOC4yOTYxMTcgMjkuMjk2MTIyIDM1IDIxIDM1IEMgMTIuNzAzODc4IDM1IDYgMjguMjk2MTE3IDYgMjAgQyA2IDExLjcwMzg4MyAxMi43MDM4NzggNSAyMSA1IHoiLz48L3N2Zz4="/>
        <input  type="text" className='bg-slate-300 border-y-2 outline-none border-r-2 border-gray-500 w-[80%] p-2 rounded-r-2xl h-11' placeholder='Search Notes...' />
    </form>
    )
}

export default SearchBar
