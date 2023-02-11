import React from "react";
import { Box, styled } from "@mui/material";

import ProfileSummary from "@/components/ProfileSummary";
import ProfileBody from "@/components/ProfileBody";

const ProfilePageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: 1,
  justifyContent: "center",
}));

const ProfileContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  maxWidth: "640px",
  gap: theme.spacing(10),
}));

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
  return (
    <ProfilePageContainer>
      <ProfileContentContainer>
        <ProfileSummary />

        <ProfileBody />
      </ProfileContentContainer>
    </ProfilePageContainer>
  );
};

export default index;
