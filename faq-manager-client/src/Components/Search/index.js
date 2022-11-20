import React from 'react';

function Search() {
  return (
    <div className='p-4 rounded-xl bg-white md:flex '>
      <input
        type='text'
        placeholder='search...'
        className='p-3 block w-full text-orange-900 bg-gray-200 rounded-md border-gray-300 border h-12 text-md '
      />

      <div className='px-6 flex-1  md:py-0 py-2'>
        <button className='md:p-3 p-2 md:px-8 rounded-md bg-blue-800  text-white'>
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
