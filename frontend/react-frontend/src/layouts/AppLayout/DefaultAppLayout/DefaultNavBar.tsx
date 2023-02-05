import React from "react";
import { Box, styled, Typography, useMediaQuery, Theme } from "@mui/material";

const DefaultNavBarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "200px",
  backgroundColor: theme.palette.common.white,
  borderRight: `1px solid ${theme.palette.grey[400]}`,
  padding: theme.spacing(2),

  [theme.breakpoints.down("lg")]: {
    width: "fit-content",
    alignItems: "center",
  },
}));

interface DefaultNavBarProps {}

const DefaultNavBar: React.FC<DefaultNavBarProps> = ({}) => {
  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  return (
    <DefaultNavBarContainer>
      {isMediumScreen ? (
        <Typography>IG-C</Typography>
      ) : (
        <Typography>Instagram Clone</Typography>
      )}
    </DefaultNavBarContainer>
  );
};

export default DefaultNavBar;
