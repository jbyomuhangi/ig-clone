import React from "react";
import { Box, styled } from "@mui/material";

import ProfileSummary from "@/components/ProfileSummary";
import ProfileBody from "@/components/ProfileBody";

const ProfileContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
}));

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
  return (
    <ProfileContentContainer>
      <ProfileSummary />
      <ProfileBody />
    </ProfileContentContainer>
  );
};

export default index;
