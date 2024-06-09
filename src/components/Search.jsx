import React from 'react'
function Search({searchBtn, setSearch, errormsg}) {
  return (
    <div className="flex flex-col space-y-6 w-full max-w-screen-sm bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40 dark:bg-slate-900 dark:text-white ">
    <input className="p-2 rounded-md outline-none font-semibold dark:bg-slate-900 dark:text-white"
    type="text"
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Enter City/Town..."


  />

  <div className='flex items-center gap-4'>
  <button className="font-semibold text-lg bg-blue-200 w-24 h-12 dark:text-black  border-none rounded-md" onClick={searchBtn}>Search</button>
  <div className='text-md font-extralight text-green-500 p-2 '  >  {errormsg}</div>
    </div>
    </div>
  )
}

export default Search