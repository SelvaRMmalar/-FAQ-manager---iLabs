import React, { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import Search from '../../Components/Search';
import Table from '../../Components/Table';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  const [query,setQuery]=useState('');
  return (
    <div className=' bg-gray-200'>
      <div className='md:flex py-4'>
        <div className=' p-2  text-xl font-bold flex-1 md:text-start text-center '>
          FAQ manager - iLabs
        </div>
        <div className='flex-initial'>
          <Button
            className=' bg-gray-400 rounded-lg p-2 px-3'
            name={
              <div className=' flex'>
                <AiFillPlusCircle className=' text-blue-700 w-6 h-6 p-1' /> Add
                New Question
              </div>
            }
            onClick={() => navigate('/create')}
          />
        </div>
      </div>
      <Search setQuery={setQuery}/>
      <div className='py-8'>
        <Table query={query} />
      </div>
    </div>
  );
}

export default Home;
