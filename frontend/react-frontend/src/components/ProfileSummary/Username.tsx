import { Box, styled, Typography, Button, IconButton } from "@mui/material";
import React from "react";
import { Settings as SettingsIcon } from "@mui/icons-material";

const UsernameContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const Username: React.FC = () => {
  return (
    <UsernameContainer>
      <Typography>username</Typography>

      <Button>Edit profile</Button>

      <IconButton>
        <SettingsIcon />
      </IconButton>
    </UsernameContainer>
  );
};

export default Username;
