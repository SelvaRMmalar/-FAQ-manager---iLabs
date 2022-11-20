import React from 'react';

function View(Items) {
  const item = Items?.Items.item;
  return (
    <div className='grid grid-row-4 gap-5 shadow-inner  rounded-md p-4 '>
      <div className='flex justify-end'></div>
      <div className='grid grid-cols-2  p-2 '>
        <div className='px-3 text-sky-900 font-bold'>ID</div>
        <div className='flex justify-end px-3'>{item?.id}</div>
      </div>
      <div className='grid grid-cols-2 p-2 '>
        <div className='px-3 text-sky-900 font-bold '>Question</div>
        <div className='flex justify-end px-3'>{item?.question}</div>
      </div>
      <div className='grid grid-cols-2 p-2 '>
        <div className='px-3 text-sky-900 font-bold'>Catogory</div>
        <div className='flex justify-end px-3'> {item?.catogory}</div>
      </div>
      <div className='grid grid-cols-2 p-2 '>
        <div className='px-3 text-sky-900 font-bold'>Status</div>
        <span
          className={
            item.isActive
              ? `px-4 py-1 rounded-md  bg-green-700 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease `
              : `px-8 py-1 rounded-md  bg-gray-400 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease `
          }
        >
          {item.isActive ? 'Published' : 'Dreft'}
        </span>
      </div>
    </div>
  );
}

export default View;
