import React from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { storeItem } from '../../store/FAQ/actions';
import Form from './Form';

function Index() {
  const dispatch = useDispatch();
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
        //   if (e.response?.data?.error) {
        //     alert('Question Added Failed');
        //     actions.setErrors(e.response?.data?.error);
        //   }
        actions.setSubmitting(false);
      }
    },
    [dispatch]
  );

  return (
    <div className=' bg-gray-200 md:p-16 sm:p-3'>
      <h1 className='flex justify-center'>Add New Question</h1>
      <div>
        <Form onSubmit={onStore} />
      </div>
    </div>
  );
}

export default Index;
