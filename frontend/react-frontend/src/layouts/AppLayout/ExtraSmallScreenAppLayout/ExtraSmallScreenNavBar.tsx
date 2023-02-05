import React from "react";
import { Box, styled } from "@mui/material";

const ExtraSmallScreenNavBarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(1),
  borderTop: `1px solid ${theme.palette.grey[400]}`,
}));

interface ExtraSmallScreenNavBarProps {}

const ExtraSmallScreenNavBar: React.FC<ExtraSmallScreenNavBarProps> = ({}) => {
  return (
    <ExtraSmallScreenNavBarContainer>
      ExtraSmallScreenNavBar
    </ExtraSmallScreenNavBarContainer>
  );
};

export default ExtraSmallScreenNavBar;
