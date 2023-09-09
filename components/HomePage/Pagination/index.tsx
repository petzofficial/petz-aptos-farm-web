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
    <Stack spacing={2} sx={{ alignItems: 'center', margin: '35px 0' }}>
      <Pagination {...paginationProps} />
    </Stack>
  );
}

export default PaginationButtons;