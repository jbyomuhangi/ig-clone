import React, { useState, useEffect } from "react";
import { Box, styled } from "@mui/material";

import ExtraSmallScreenNavBar from "./ExtraSmallScreenNavBar";
import ExtraSmallScreenTopBar from "./ExtraSmallScreenTopBar";

const ExtraSmallScreenAppLayoutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

const ChildrenContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  overflow: "auto",
}));

interface ExtraSmallScreenAppLayoutProps {
  children: React.ReactNode;
}

const ExtraSmallScreenAppLayout: React.FC<ExtraSmallScreenAppLayoutProps> = ({
  children,
}) => {
  const [height, setHeight] = useState<string>("0px");

  useEffect(() => {
    const documentHeight = () => setHeight(() => `${window.innerHeight}px`);
    setHeight(() => `${window.innerHeight}px`);

    window.addEventListener("resize", documentHeight);
    return () => window.removeEventListener("resize", documentHeight);
  }, []);

  return (
    <ExtraSmallScreenAppLayoutContainer sx={{ height }}>
      <ExtraSmallScreenTopBar />
      <ChildrenContainer>{children}</ChildrenContainer>
      <ExtraSmallScreenNavBar />
    </ExtraSmallScreenAppLayoutContainer>
  );
};

export default ExtraSmallScreenAppLayout;
