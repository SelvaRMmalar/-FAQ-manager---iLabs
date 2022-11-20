import React from 'react';
import Columns from './column';
import Loading from '../Loading';
import NoData from '../NoData';
import DataTable from 'react-data-table-component';
import { customStyles } from '../../assets/Style/DataTable';
function Table() {
  const loading = false;
  const data = [
    {
      id: '1',
      question: 'question1',
      catogory: 'About Company',
      isActive: true,
    },
    {
      id: '2',
      question: 'question2',
      catogory: 'About Company',
      isActive: true,
    },
    {
      id: '3',
      question: 'question3',
      catogory: 'About Company',
      isActive: false,
    },
  ];
  return (
    <DataTable
      customStyles={customStyles}
      columns={Columns}
      data={data}
      fixedHeader={true}
      progressPending={loading}
      progressComponent={<Loading />}
      noDataComponent={<NoData />}
    />
  );
}

export default Table;
