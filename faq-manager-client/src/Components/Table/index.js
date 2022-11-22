import { useEffect, useState } from 'react';
import Columns from './column';
import Loading from '../Loading';
import NoData from '../NoData';
import DataTable from 'react-data-table-component';
import { customStyles } from '../../assets/Style/DataTable';
import { useDispatch, useSelector } from 'react-redux';
import { loadFAQ } from '../../store/FAQ/actions';
function Table({ query }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  useEffect(() => {
    dispatch(loadFAQ(pageSize, page, query));
  }, [dispatch, page, pageSize, query]);

  const { loading, faq, paginationOption } = useSelector(
    (state) => state.FAQReducer
  );
  return (
    <DataTable
      customStyles={customStyles}
      columns={Columns}
      data={faq}
      fixedHeader={true}
      progressPending={loading}
      progressComponent={<Loading />}
      noDataComponent={<NoData />}
      pagination
      paginationServer
      paginationTotalRows={paginationOption.totalRows}
      onChangeRowsPerPage={(row) => setPageSize(row)}
      onChangePage={(pageNo) => setPage(pageNo)}
    />
  );
}

export default Table;
