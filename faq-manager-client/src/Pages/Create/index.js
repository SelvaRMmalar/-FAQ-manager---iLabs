import React from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { storeItem } from '../../store/FAQ/actions';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Form from './Form';

function Index() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onStore = useCallback(
    async (values, actions) => {
      actions.setSubmitting(true);
      try {
        const response = await dispatch(storeItem(values));
        if (response.status === 200) {
          alert('New Question Added');
          window.location.reload();
        }
      } catch (e) {
        actions.setSubmitting(false);
      }
    },
    [dispatch]
  );

  return (
    <div className=' bg-gray-200 md:p-16 sm:p-3'>
      <h1 className='flex justify-center'>Add New Question</h1>
      <div className='p-6'>
        <button
          className='md:p-3 p-2 md:px-8 rounded-md bg-blue-800  text-white'
          onClick={() => navigate(-1)}
        >
          <div className='flex'>
            <AiOutlineArrowLeft className='w-6 h-6 p-1' />
            Back
          </div>
        </button>
      </div>
      <div>
        <Form onSubmit={onStore} />
      </div>
    </div>
  );
}

export default Index;
