import React from "react";
import { Box, styled } from "@mui/material";

import Post from "@/components/Post";

const HomePageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export default function Home() {
  return (
    <HomePageContainer>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </HomePageContainer>
  );
}
