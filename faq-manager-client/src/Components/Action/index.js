import { React, useState } from 'react';
import { Menu } from '@headlessui/react';
import { BsThreeDotsVertical, BsCheckCircle, BsEye } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Button from '../Button';
import View from '../../Pages/View';
import Delete from '../../Pages/Delete';
import Active from '../../Pages/Active';
import Modal from '../Model';
function Actionmenu(item) {
  const [isOpenView, setIsOpenView] = useState(false);
  const [isOpenDetele, setIsOpenDetele] = useState(false);
  const [isOpenActive, setIsOpenActive] = useState(false);

  return (
    <>
      <Menu>
        <Menu.Button>
          <BsThreeDotsVertical />
        </Menu.Button>

        <Menu.Items className='absolute mt-2 w-56 right-0 divide-y origin-top-righ divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10'>
          <Menu.Item>
            <Button
              name={
                <div className='flex'>
                  <BsEye className=' w-6 h-6' />
                  <p className='px-3'>View</p>
                </div>
              }
              className={
                'p-3  font-semibold group flex w-full items-center rounded-md px-2 py-3'
              }
              onClick={() => setIsOpenView(true)}
            />
          </Menu.Item>

          <Menu.Item>
            <Button
              name={
                item?.item?.isActive ? (
                  <div className='flex px-1'>
                    <ImCross className=' w-4 h-4 ' />{' '}
                    <p className='px-3'>Deactive</p>
                  </div>
                ) : (
                  <div className='flex'>
                    <BsCheckCircle className=' w-6 h-6' />
                    <p className='px-3'> Active</p>
                  </div>
                )
              }
              className={
                'p-3  font-semibold group flex w-full items-center rounded-md px-2 py-3'
              }
              onClick={() => setIsOpenActive(true)}
            />
          </Menu.Item>
          <Menu.Item>
            <Button
              name={
                <div className='flex'>
                  <RiDeleteBin5Line className=' w-6 h-6' />
                  <p className='px-3'>Delete</p>
                </div>
              }
              className={
                'p-3  font-semibold group flex w-full items-center rounded-md px-2 py-3'
              }
              onClick={() => setIsOpenDetele(true)}
            />
          </Menu.Item>
        </Menu.Items>
      </Menu>
      <Modal
        content={<View Items={item} />}
        isOpen={isOpenView}
        setIsOpen={setIsOpenView}
      />
      <Modal
        content={<Delete id={item?.id} setIsOpen={setIsOpenDetele} />}
        isOpen={isOpenDetele}
        setIsOpen={setIsOpenDetele}
      />
      <Modal
        content={<Active />}
        isOpen={isOpenActive}
        setIsOpen={setIsOpenActive}
      />
    </>
  );
}

export default Actionmenu;
