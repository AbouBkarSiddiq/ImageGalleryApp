import React, { useState } from 'react'

export const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('')
  const onSubmitHandler = (e) => {
    e.preventDefault();
    searchText(text);
  }
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmitHandler} className="w-full max-w-sm">
        <div className="flex items-center justify-center border-b-2 border-teal-500 py-2">
          <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
          <button className="flex-shrink-0 focus:outline-none bg-green-400 hover:bg-green-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
