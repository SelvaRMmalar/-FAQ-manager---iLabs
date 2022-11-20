import Actionmenu from '../Action';
const Columns = [
  {
    key: 'id',
    name: '#',
    center: true,
    selector: (row) => (row?.id ? row?.id : '.....'),
  },
  {
    key: 'question ',
    name: 'Question ',
    center: true,
    selector: (row) => (row?.question ? row?.question + '?' : '......'),
  },
  {
    key: 'catogory',
    name: 'Catogory',
    center: true,
    selector: (row) => (row?.catogory ? row?.catogory : '......'),
  },
  {
    key: 'isActive',
    name: 'Status',
    center: true,
    selector: (row) => (
      <div>
        <span
          className={
            row.isActive
              ? `px-4 py-1 rounded-md  bg-green-700 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease `
              : `px-8 py-1 rounded-md  bg-gray-400 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease `
          }
        >
          {row.isActive ? 'Published' : 'Dreft'}
        </span>
      </div>
    ),
  },
  {
    key: 'Action',
    name: 'Action',
    center: true,
    selector: (row) => (
      <div>
        <Actionmenu item={row} />
      </div>
    ),
  },
];
export default Columns;
