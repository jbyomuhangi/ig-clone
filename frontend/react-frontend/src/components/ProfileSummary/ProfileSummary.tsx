import { Avatar, Box, styled, Theme, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

import StatSummary from "./StatSummary";
import ExtraSmallScreenProfileSummary from "./ExtraSmallScreenProfileSummary";
import Username from "./Username";

const ProfileSummaryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(10),
}));

const StyledAvatar = styled(Avatar)(() => ({
  height: "150px",
  width: "150px",
}));

const SummaryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const ProfileSummary: React.FC = () => {
  const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  if (isExtraSmallScreen) return <ExtraSmallScreenProfileSummary />;

  return (
    <ProfileSummaryContainer>
      <StyledAvatar />

      <SummaryContainer>
        <Username />

        <StatSummary />

        <Typography sx={{ fontWeight: "bold" }}>full username</Typography>
      </SummaryContainer>
    </ProfileSummaryContainer>
  );
};

export default ProfileSummary;
