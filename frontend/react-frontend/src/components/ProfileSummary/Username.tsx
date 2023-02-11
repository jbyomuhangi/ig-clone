import { Box, styled, Typography, Button } from "@mui/material";
import React from "react";

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
    </UsernameContainer>
  );
};

export default Username;
