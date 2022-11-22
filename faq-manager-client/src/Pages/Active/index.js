import React from 'react';
import Button from '../../Components/Button';
import { useDispatch } from 'react-redux';
import { updateItem, loadFAQ } from '../../store/FAQ/actions';
function Active({ item, setIsOpen }) {
  const dispatch = useDispatch();
  const handleUpdate = async () => {
    await dispatch(
      updateItem(item?.item?.id, { isActive: !item.item.isActive })
    );

    await dispatch(loadFAQ(10, 1, ''));
    setIsOpen(false);
  };
  return (
    <div className='md:p-6 sm:p-1'>
      <div className='md:p-3 sm:p-1 text-lg'>Are you sure?</div>
      <div className='flex justify-between p-4'>
        <Button
          name={item?.item?.isActive ? 'Deactivate' : 'Activate'}
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
