import React from 'react';
import Button from '../../Components/Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../store/FAQ/actions';
function Delete(id, setIsOpen) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteItem(id));
  };

  return (
    <div>
      <div>Are you sure?</div>
      <div className='flex justify-between p-4'>
        <Button
          name='Delete'
          onClick={handleDelete}
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
