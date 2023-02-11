import { Settings as SettingsIcon } from "@mui/icons-material";
import { Box, IconButton, styled, Typography } from "@mui/material";
import React from "react";

const UsernameContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const ExtraSmallScreenUsername: React.FC = () => {
  return (
    <UsernameContainer>
      <Typography>username</Typography>

      <IconButton>
        <SettingsIcon />
      </IconButton>
    </UsernameContainer>
  );
};

export default ExtraSmallScreenUsername;
