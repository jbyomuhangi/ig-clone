import React from "react";
import { Box, styled } from "@mui/material";

const ExtraSmallScreenTopBarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.grey[400]}`,
}));

interface ExtraSmallScreenTopBarProps {}

const ExtraSmallScreenTopBar: React.FC<ExtraSmallScreenTopBarProps> = ({}) => {
  return (
    <ExtraSmallScreenTopBarContainer>
      ExtraSmallScreenTopBar
    </ExtraSmallScreenTopBarContainer>
  );
};

export default ExtraSmallScreenTopBar;
