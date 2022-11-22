import React from 'react';
import Button from '../../Components/Button';
import { useDispatch } from 'react-redux';
import { deleteItem, loadFAQ } from '../../store/FAQ/actions';
function Delete({ id, setIsOpen }) {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    await dispatch(deleteItem(id));
    await dispatch(loadFAQ());
    setIsOpen(false);
  };

  return (
    <div className='md:p-6 sm:p-1'>
      <div className='md:p-3 sm:p-1'>Are you sure?</div>
      <div className='flex justify-between p-4'>
        <Button
          name='Delete'
          onClick={() => handleDelete()}
          className='bg-red-800 text-white p-2 px-3 rounded-xl '
        />

        <Button
          name='Cancel'
          onClick={() => setIsOpen(false)}
          className=' bg-blue-800 text-white p-2 px-3 rounded-xl'
        />
      </div>
    </div>
  );
}

export default Delete;
