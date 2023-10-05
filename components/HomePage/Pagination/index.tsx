import React, { FC } from 'react';
import Pagination, { PaginationProps } from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface Props { }

const PaginationButtons: FC = () => {
  const paginationProps: PaginationProps = {
    count: 5,
    showFirstButton: true,
    showLastButton: true,
  };

  return (
    <Stack spacing={2} sx={{ alignItems: 'center', margin: '50px 0 20px' }}>
      <Pagination {...paginationProps} />
    </Stack>
  );
}

export default PaginationButtons;


// import { useAppDispatch, useAppSelector } from 'app/hooks';
// import { fetchTransactionsAction, selectAccount, selectTransactions } from 'app/reducers/AccountSlice';
// import React, { useEffect, useState } from 'react';

// import ReactPaginate from 'react-paginate';
// export default function PaginationButtons() {
//   const [pageCount, setPageCount] = useState(0)
//   const [itemOffset, setItemOffset] = useState(0)
//   // const [currentItems, setCurrentItems] = useState()
//   const transaction = useAppSelector(selectTransactions)
//   const account = useAppSelector(selectAccount)
//   const dispatch = useAppDispatch()
//   const itemsPerPage = 4


//   useEffect(() => {
//     const endOffset = itemOffset + itemsPerPage
//     setPageCount(Math.ceil(transaction?.length / itemsPerPage))
//     dispatch(fetchTransactionsAction(account?.address))
//   }, [dispatch, account, itemOffset, itemsPerPage])


//   const handlePageClick = (event: any) => {

//     const newOffset = (event.selected * itemsPerPage) % transaction.length;
//     setItemOffset(newOffset);
//   };
//   return (
//     <>
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         renderOnZeroPageCount={null}
//         containerClassName="pagination"
//         previousLinkClassName="page-num"
//         nextLinkClassName="page-num"
//         activeLinkClassName="active"
//       />
//     </>
//   )
// }
