import React from "react";
import { Box, styled, Button, Typography } from "@mui/material";

import { extraSmallScreenNavBarButtons } from "../appNavButtons";
import NextLink from "@/components/NextLink";

const ExtraSmallScreenNavBarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(1),
  borderTop: `1px solid ${theme.palette.grey[400]}`,
}));

interface ExtraSmallScreenNavBarProps {}

const ExtraSmallScreenNavBar: React.FC<ExtraSmallScreenNavBarProps> = ({}) => {
  return (
    <ExtraSmallScreenNavBarContainer>
      {extraSmallScreenNavBarButtons.map((button) => {
        return (
          <NextLink href={button.href} key={button.name}>
            <Button>
              <Typography>{button.name}</Typography>
            </Button>
          </NextLink>
        );
      })}
    </ExtraSmallScreenNavBarContainer>
  );
};

export default ExtraSmallScreenNavBar;
