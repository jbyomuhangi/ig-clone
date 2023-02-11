import React from "react";
import {
  Box,
  styled,
  Typography,
  useMediaQuery,
  Theme,
  Button,
} from "@mui/material";

import { defaultNavBarButtons } from "../appNavButtons";
import NextLink from "@/components/NextLink";

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

const NavButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  marginTop: theme.spacing(5),
}));

const NavButton = styled(Button)(({ theme }) => ({
  "&.MuiButton-root": {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    padding: `${theme.spacing(1)}px 0px`,
  },

  [theme.breakpoints.down("lg")]: {
    "&.MuiButton-root": {
      justifyContent: "center",
    },
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

      <NavButtonContainer>
        {defaultNavBarButtons.map((button) => {
          return (
            <NextLink href={button.href} key={button.name}>
              <NavButton>
                <Typography>{button.name}</Typography>
              </NavButton>
            </NextLink>
          );
        })}
      </NavButtonContainer>
    </DefaultNavBarContainer>
  );
};

export default DefaultNavBar;
