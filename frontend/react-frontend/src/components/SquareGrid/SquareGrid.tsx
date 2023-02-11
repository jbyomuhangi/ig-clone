import { Box, styled } from "@mui/material";
import React, { useMemo } from "react";

import { returnNull } from "@/utils/noopUtils";

const SquareGridContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(0.5),
  },
}));

const GridRowContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(0.5),
  },
}));

const GridItemContainer = styled(Box)(() => ({
  flex: 1,
  aspectRatio: "1/1",
}));

interface SquareGridProps {
  data?: any[];
  itemsPerRow?: number;
  itemRenderer?: (data: any) => React.ReactNode;
}

const SquareGrid: React.FC<SquareGridProps> = ({
  itemsPerRow = 3,
  data = [],
  itemRenderer = returnNull,
}) => {
  const columnNumbers = useMemo(() => {
    const columnCount = Math.ceil(data.length / itemsPerRow);
    return Array.from(Array(columnCount).keys());
  }, [data.length, itemsPerRow]);

  const rowNumbers = useMemo(() => {
    return Array.from(Array(itemsPerRow).keys());
  }, [itemsPerRow]);

  return (
    <SquareGridContainer>
      {columnNumbers.map((columnNumber) => {
        return (
          <GridRowContainer key={columnNumber}>
            {rowNumbers.map((rowNumber) => {
              const itemIndex = columnNumber * itemsPerRow + rowNumber;
              const item = data[itemIndex];

              return (
                <GridItemContainer key={rowNumber}>
                  {item && itemRenderer(item)}
                </GridItemContainer>
              );
            })}
          </GridRowContainer>
        );
      })}
    </SquareGridContainer>
  );
};

export default SquareGrid;
