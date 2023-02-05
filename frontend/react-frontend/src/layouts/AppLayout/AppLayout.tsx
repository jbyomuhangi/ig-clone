import React, { useMemo } from "react";
import { useMediaQuery, Theme } from "@mui/material";

import DefaultAppLayout from "./DefaultAppLayout";
import ExtraSmallScreenAppLayout from "./ExtraSmallScreenAppLayout";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const LayoutComponent = useMemo((): React.FC<any> => {
    if (isExtraSmallScreen) return ExtraSmallScreenAppLayout;
    return DefaultAppLayout;
  }, [isExtraSmallScreen]);

  return <LayoutComponent>{children}</LayoutComponent>;
};

export default AppLayout;
