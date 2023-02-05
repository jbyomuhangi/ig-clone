import React from "react";
import { Box, styled } from "@mui/material";

import DefaultNavBar from "./DefaultNavBar";

const DefaultAppLayoutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100vh",
}));

const ChildrenContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  overflow: "auto",
}));

interface DefaultAppLayoutProps {
  children: React.ReactNode;
}

const DefaultAppLayout: React.FC<DefaultAppLayoutProps> = ({ children }) => {
  return (
    <DefaultAppLayoutContainer>
      <DefaultNavBar />
      <ChildrenContainer>{children}</ChildrenContainer>
    </DefaultAppLayoutContainer>
  );
};

export default DefaultAppLayout;
