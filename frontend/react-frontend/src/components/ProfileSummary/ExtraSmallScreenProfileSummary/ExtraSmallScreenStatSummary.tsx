import { Box, styled, Typography } from "@mui/material";
import React from "react";

const ExtraSmallScreenStatSummaryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(5),
  padding: `${theme.spacing(1)} 0px`,
  borderTop: `1px solid ${theme.palette.grey[400]}`,

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(2),
  },
}));

const StatContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
});

const ExtraSmallScreenStatSummary: React.FC = () => {
  return (
    <ExtraSmallScreenStatSummaryContainer>
      <StatContainer>
        <Typography sx={{ fontWeight: "bold" }}>17</Typography>
        <Typography>posts</Typography>
      </StatContainer>

      <StatContainer>
        <Typography sx={{ fontWeight: "bold" }}>200</Typography>
        <Typography>followers</Typography>
      </StatContainer>

      <StatContainer>
        <Typography sx={{ fontWeight: "bold" }}>200</Typography>
        <Typography>following</Typography>
      </StatContainer>
    </ExtraSmallScreenStatSummaryContainer>
  );
};

export default ExtraSmallScreenStatSummary;
