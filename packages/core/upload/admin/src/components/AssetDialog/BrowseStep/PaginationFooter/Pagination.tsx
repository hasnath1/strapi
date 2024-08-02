import React, { useMemo } from 'react';

import { Box, Flex } from '@strapi/design-system';

import { PaginationContext } from './PaginationContext';

interface PaginationProps {
  activePage: number;
  children: React.ReactNode;
  label?: string;
  pageCount: number;
}

export const Pagination = ({ children, activePage, pageCount, label = 'pagination' }: PaginationProps) => {
  const paginationValue = useMemo(() => ({ activePage, pageCount }), [activePage, pageCount]);

  return (
    <PaginationContext.Provider value={paginationValue}>
      <Box tag="nav" aria-label={label}>
        <Flex tag="ul" gap={1}>
          {children}
        </Flex>
      </Box>
    </PaginationContext.Provider>
  );
};