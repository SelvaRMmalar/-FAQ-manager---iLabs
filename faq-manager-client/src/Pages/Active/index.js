import React from 'react';
import Button from '../../Components/Button';
import { useDispatch } from 'react-redux';
import { updateItem } from '../../store/FAQ/actions';
function Active(item, setIsOpen) {
  const dispatch = useDispatch();
  const handleUpdate = () => {
    item.isActive = !item.isActive;
    dispatch(updateItem(item?.id, item));
  };
  return (
    <div>
      <div>Are you sure?</div>
      <div className='flex justify-between p-4'>
        <Button
          name='Delete'
          onClick={handleUpdate}
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

export default Active;
