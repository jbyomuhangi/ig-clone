import { Avatar, Box, styled, Button, Typography } from "@mui/material";
import React from "react";

const ExtraSmallScreenProfileSummaryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
}));

const StyledAvatar = styled(Avatar)(() => ({
  height: "75px",
  width: "75px",
}));

const SummaryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const ExtraSmallScreenProfileSummary: React.FC = () => {
  return (
    <Box>
      <ExtraSmallScreenProfileSummaryContainer>
        <StyledAvatar />

        <SummaryContainer>
          <Typography>username</Typography>

          <Button>Edit profile</Button>
        </SummaryContainer>
      </ExtraSmallScreenProfileSummaryContainer>

      <Typography sx={{ fontWeight: "bold" }}>full username</Typography>
    </Box>
  );
};

export default ExtraSmallScreenProfileSummary;
